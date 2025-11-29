const dbank = "tr909"

//drums
$: s("hh!8").gain(.4)
//$: s("bd(4,16)").bank(dbank)._punchcard()
$: s("bd").struct("1 0 1 0 0 1 0 1").bank(dbank)._punchcard()
$: s("sd").bank(dbank).beat("4, 12", 16)._punchcard()

//melody
$: note("{c#5 d5 e5 - d5 e5}%8")
	.sound("piano")
	//.sound("gm_electric_guitar_muted")
	.gain(1.5)
	._pianoroll()

//harmony
$: note("c4 a5, e4 e5, g4 c#5").sound("triangle")
	.gain(.3)
	.lpf(800)
	._punchcard()

$: note("a3, c#3, e3, <e7, eb7, d7, db7>, b3")
	.s("sawtooth").vib(2)
	.lpf(600).lpa(2).lpenv(6)._pianoroll()
