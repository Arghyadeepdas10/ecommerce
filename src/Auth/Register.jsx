import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Register() {

  const navigate = useNavigate();
  const [img, setImg] = React.useState(null);

const schema = yup.object({
    firstname: yup.string().required("This is Required"),
    lastname: yup.string().required("This is Required"),
    email: yup.string().email("Invalid email format").required("This is Required"),
    password: yup.string().required("This is Required")
})

const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handlesignup = ()=>{
    navigate("/login");
  }

  const handlesubmit = (data) => {
    console.log(data);
    
    const formdata = new FormData();
    
    formdata.append('profile',img);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handlesubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          {...register("firstname")}
                          fullWidth
                          label="First Name"
                          autoFocus
                          error={!!errors.firstname}
                          helperText={errors.firstname?.message}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          {...register("lastname")}
                          fullWidth
                          label="Last Name"
                          error={!!errors.lastname}
                          helperText={errors.lastname?.message}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          {...register("email")}
                          fullWidth
                          label="Email Address"
                          type="email"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          {...register("password")}
                          fullWidth
                          label="Password"
                          type="password"
                          error={!!errors.password}
                          helperText={errors.password?.message}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <label>Add Image:</label>
                      <Input type="file" onChange={(e) => setImg(e.target.files[0])} />
                      <img src={img ? URL.createObjectURL(img) : ""} style={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handlesignup()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Box>

        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}