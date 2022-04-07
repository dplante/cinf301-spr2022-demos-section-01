import React from 'react';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Box, ButtonGroup } from '@mui/material';
function Signin() {
return (
<div>
<Box
	sx={{
	my: 8,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	}}>
	<Typography variant="h1"> Sign In </Typography>
	<TextField
	label="Email Address"
	required
	id="email"
	name="email"
	margin="normal"
/>
<TextField
	label="Password"
	required
	id="password"
	name="password"
	type="password"
	margin="normal"
/>
<Link
	href="#"
	sx={{mr: 12, mb: 2}}
>
	forget password?
</Link>
<Button
	variant="contained"
	sx={{mt: 2}}
>
	Sign In
</Button>
</Box>
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup size="small" aria-label="small button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup color="secondary" aria-label="medium secondary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup size="large" aria-label="large button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
</div>
);
}
export default Signin;