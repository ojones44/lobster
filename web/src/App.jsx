import logo from './assets/lobster-logo.png';

function App() {
	return (
		<>
			<div class='navbar'>
				<div class='container flex'>
					<div className='logo-section'>
						<img className='logo' src={logo} alt='logo' />
						<h1 class='logo'>Lobster.</h1>
					</div>

					<nav class='nav-items'>
						<ul>
							<li>
								<a href='index.html'>Home</a>
							</li>
							<li>
								<a href='about.html'>About</a>
							</li>
							<li>
								<a href='signup.html'>Signup</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<section class='hero'>
				<div class='container grid'>
					<div class='hero-msg'>
						<h1>Meet your lobster!</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
							aut voluptatem distinctio tempora! Quae, ut!
						</p>
					</div>
					<div class='signup-form flex'>
						<h2>Let's go fishing</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
							asperiores?
						</p>
						<input type='text' placeholder='First Name' />
						<input type='email' placeholder='Email' />
						<select name='category' id='category'>
							<option value='friends'>Friends</option>
							<option value='casual'>Casual</option>
							<option value='relationship'>Relationship</option>
						</select>
						<button class='btn'>Let's go!</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
