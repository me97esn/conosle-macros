macro hello {
    rule { $name } => {'Hejsan'+name}
}

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

macro Log {
  rule { $x } => { console.log($x) }
}

macro json {
  rule { $x } => { JSON.stringify($x) }
}

export Log
export json
export =>
export hello
export nullity