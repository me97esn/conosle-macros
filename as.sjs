macro as {
	rule infix { $x | json } => { JSON.parse($x) }
	rule infix { $x | string } => { JSON.stringify($x) }
	rule infix { $x | int } => { Number.parseInt($x) }
	rule infix { $x | float } => { Number.parseFloat($x) }
}