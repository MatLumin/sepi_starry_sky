const sepi_moon_element_id = "SEPI_MOON_ELEMENT";
const sepi_space_station_element_id = "SEPI_SPACE_STATION_ELEMENT";
const sepi_crewmate_element_id = "SEPI_CREWMATE_ELEMENT";
const moon_speed = 0.1;
const space_station_speed = -0.3;
const crew_mate_speed = 5;


function random_bit()
	{
	return Math.random() > 0.5;
	}


function animate_the_moon(max_index)
	{
	let moon = document.getElementById(sepi_moon_element_id);
	let space_station = document.getElementById(sepi_space_station_element_id);
	let crew_mate = document.getElementById(sepi_crewmate_element_id);
 
	let moon_last_index = 0;
	let space_station_last_index = 0;
	let crew_mate_index = 0;
	setInterval
		(
		function ()
			{
			moon_last_index += moon_speed;
			space_station_last_index += space_station_speed;
			crew_mate_index += crew_mate_speed;

			moon_last_index %= max_index;
			space_station_last_index %= max_index;
			crew_mate_index %= max_index;

			moon.style.transform = `scale(1) translateX(${moon_last_index}px)`;
			space_station.style.transform = `translateX(${space_station_last_index}px) translateY(120px)`;
			crew_mate.style.transform = `translateX(${crew_mate_index}px) rotate(${crew_mate_index%365}deg)`;

			if(crew_mate_index == 0)
				{
				crew_mate.style.visibility = ["hidden", "visible"].at(random_bit() && random_bit() && random_bit());
				}



			},20
		); 

	}