macro asJSON {
	rule infix {
		$x | 
	} => {
		JSON.parse($x);
	}
}