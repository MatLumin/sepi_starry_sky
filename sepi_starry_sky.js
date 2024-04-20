let start_count = 0;

function set_canvas_size_according_to_user_screen(canvas_id)
	{
	let target = document.getElementById(canvas_id);
	target.setAttribute("width", screen.height);
	target.setAttribute("height", screen.width);
	}

function make_a_star(context, canvas_height, canvas_width, max_star_count)
	{
	if (start_count == max_star_count)
		{
		return;
		}
	let rand_x = Math.floor(Math.random() * canvas_height-1);
	let rand_y = Math.floor(Math.random() * canvas_width-1);

	context.fillRect(rand_x, rand_y,1,1);
	context.fillStyle = "white"
	context.fill();
	}


function fill_canvas_with_sepi_stars(canvas_id, max_star_count)
	{
	let canvas = document.getElementById(canvas_id);
	let context = canvas.getContext("2d");
	let canvas_height = canvas.getAttribute("height");
	let canvas_width = canvas.getAttribute("width");

	context.fillStyle = "black";
	context.fillRect(0,0,canvas_width, canvas_height);
	context.fill();

	setInterval(
		make_a_star,
		1,
		context,
		canvas_height,
		canvas_width,
		max_star_count,
		);
	}