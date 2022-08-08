function tom(days_break) {
	let work_days = 365 - Number(days_break);
	let holliday_days = Number(days_break);
	const norm_to_sleep = 30000

	const play_time = (work_days * 63) + (holliday_days * 127)
	let H = Math.abs(Math.trunc((norm_to_sleep - play_time) / 60))
	let M = Math.abs(Math.trunc((norm_to_sleep - play_time) % 60))

	if (play_time > norm_to_sleep) {
		console.log(`Tom will run away
${H} hours and ${M} minutes more for play`)
	} else {
		console.log(`Tom sleeps well
${H} hours and ${M} minutes less for play`)
	}
}

tom(20)