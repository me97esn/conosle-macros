macro as {
	rule infix { $x | json } => { JSON.parse($x) }
	rule infix { $x | string } => { JSON.stringify($x) }
	rule infix { $x | int } => { Number.parseInt($x) }
	rule infix { $x | float } => { Number.parseFloat($x) }
}
export as
macro => {
  rule infix { ($value (,) ...) | {$body ...} } => {
    function($value (,) ...) {
      $body ...
    }.bind(this)
  }
  rule infix { ($value (,) ...) | $guard:expr } => {
    function($value (,) ...) {
      return $guard;
    }.bind(this)
  }
  rule infix { $param:ident | $guard:expr } => {
    function($param) {
      return $guard;
    }.bind(this)
  }
}


export =>

macro Log {
  rule { $x } => { console.log($x) }
}

export Log
macro null_helper {
    rule {($processed ...) ($rest)} => {
        $processed (.) ... . $rest
    }
    rule {($processed ...) ($rest_head $rest ...)} => {
        $processed (.) ... . $rest_head
        && null_helper ($processed ... $rest_head) ($rest ...)
    }
}

macro nullity {
    rule {($x)} => {
        $x
    }
    rule {($head . $rest (.) ...)} => {
        $head && null_helper ($head) ($rest ...)
    }
}
export nullity
macro ... {
  case infix {
    $start:lit | _ $end:lit
  } => {
    var start = unwrapSyntax(#{$end});
    var end   = unwrapSyntax(#{$start});
    var steps = Math.abs(end - start);
    if (steps > 10) {
      return #{ _range ($start, $end) };
    } 
    
    return #{ _inline ($start, $end) };
  }
}

macro _inline {
  case {
    _ ( $start, $end )
  } => {
    var start = unwrapSyntax(#{$start});
    var end   = unwrapSyntax(#{$end});
    var inline = [];
    
    for (start; start < end; start++) {
      inline.push(makeValue(start, #{here}));
      inline.push(makePunc(",", #{here}));
    }
    inline.push(makeValue(end, #{here}));
    return [makeDelim("[]",inline, #{here})];
  }
}

macro _range {
  rule  {
    ( $start, $end )
  } => {
    (function (start, end) {
      var range = [];
      
      for (start; start <= end; start++) {
        range.push(start);
        }
      
      return range;
    })($start, $end)
  }
}

export ...;