import { Container, Paper, TextField, Box, Grid, Button } from '@material-ui/core';

function Login() {
	return (
		<Container maxWidth="lg">
			<Paper elevation={3}>
				<Grid container >
					<Grid item lg={6}>

					</Grid>
					<Grid item lg={6} alignContent="center">
						<Box mx="auto" m={5} p={8}>
							<Box m={5}>
								<TextField fullWidth label="Email" />
							</Box>
							<Box m={5}>
								<TextField fullWidth label="Password" />
							</Box>
							<Box m={5}>
								<Button variant="contained" color="primary" fullWidth>
									Login
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}

export default Login;
