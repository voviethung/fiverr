"use client";

import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Autocomplete,
} from "@mui/material";
import { useState, useImperativeHandle, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getProfileApi } from "../../redux/reducers/userReducer";
import { updateUserApi } from "../../redux/reducers/adminReducer";
import { toast } from "react-toastify";

const User = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.adminReducer || {});

  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery("(max-width:600px)");

  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: user?.id || "",
      email: user?.email || "",
      name: user?.name || "",
      phone: user?.phone || "",
      birthday: user?.birthday || "",
      certification: user?.certification || [],
      skill: user?.skill || [],
      gender: user?.gender ?? true,
      role: user?.role || "",
    },
    onSubmit: (values) => {
      dispatch(updateUserApi(values));
      toast.success("Cập nhật thông tin thành công!");
      setOpen(false);
      dispatch(getProfileApi());
    },
  });

  useImperativeHandle(ref, () => ({
    open: (data) => {
      frm.setValues(data || {});
      setOpen(true);
    },
    close: () => setOpen(false),
  }));

  const certifications = Array.isArray(user?.certification)
    ? user.certification
    : [];
  const skills = Array.isArray(user?.skill) ? user.skill : [];

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <form onSubmit={frm.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                disabled
                id="email"
                name="email"
                label="Email"
                value={frm.values.email}
                onChange={frm.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone"
                value={frm.values.phone}
                onChange={frm.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={frm.values.name}
                onChange={frm.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="birthday"
                name="birthday"
                label="Birthday"
                value={frm.values.birthday}
                onChange={frm.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={frm.values.gender ? "male" : "female"}
                  onChange={(e) =>
                    frm.setFieldValue("gender", e.target.value === "male")
                  }
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="role"
                name="role"
                label="Role"
                value={frm.values.role}
                onChange={frm.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                multiple
                options={certifications}
                freeSolo
                value={frm.values.certification}
                onChange={(e, value) => frm.setFieldValue("certification", value)}
                renderInput={(params) => <TextField {...params} label="Certification" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                multiple
                options={skills}
                freeSolo
                value={frm.values.skill}
                onChange={(e, value) => frm.setFieldValue("skill", value)}
                renderInput={(params) => <TextField {...params} label="Skill" />}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export default User;


// import { useTheme } from "@mui/material/styles";
// import {
//   useMediaQuery,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Autocomplete,
//   Chip,
// } from "@mui/material";
// import { useState, useImperativeHandle, forwardRef } from "react";
// // import { AppDispatch, RootState } from "../../redux/configStore";
// import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import { getProfileApi } from "../../redux/reducers/userReducer";
// import { toast } from "react-toastify";
// import { updateUserApi } from "../../redux/reducers/adminReducer";

// const User = (Props, ref) => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.adminReducer);
//   //
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
//   //
//   const frm = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       id: user?.id,
//       email: user?.email,
//       name: user?.name,
//       phone: user?.phone,
//       birthday: user?.birthday,
//       certification: user?.certification,
//       skill: user?.skill,
//       gender: user?.gender,
//       role: user?.role,
//     },
//     onSubmit: (values) => {
//       //   console.log(values);
//       toast.success("Cập nhật thông tin thành công !");
//       dispatch(updateUserApi(values));
//       dispatch(getProfileApi());
//     },
//   });
//   //
//   useImperativeHandle(ref, () => ({
//     open: (data?) => {
//       frm.setValues(user);
//       console.log(data);
//       setOpen(true);
//     },
//     close: () => setOpen(false),
//   }));
//   //
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   //

//   return (
//     <Dialog
//       className="dialog"
//       fullScreen={fullScreen}
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="responsive-dialog-title"
//     >
//       <DialogTitle className="dialogTitle" id="responsive-dialog-title">
//         UPDATE USER
//       </DialogTitle>
//       <DialogContent className="dialogContent">
//         <form className="form" onSubmit={frm.handleSubmit}>
//           <Grid spacing={1} container mt={1}>
//             <Grid item xs={12} md={6} mt={1}>
//               <TextField
//                 fullWidth
//                 disabled
//                 id="email"
//                 name="email"
//                 type="email"
//                 label="Email"
//                 value={frm.values.email}
//                 onChange={frm.handleChange}
//                 onBlur={frm.handleBlur}
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <TextField
//                 fullWidth
//                 name="phone"
//                 type="text"
//                 value={frm.values.phone}
//                 onChange={frm.handleChange}
//                 onBlur={frm.handleBlur}
//                 label="Phone"
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <TextField
//                 fullWidth
//                 id="name"
//                 name="name"
//                 type="text"
//                 label="Name"
//                 value={frm.values.name}
//                 onChange={frm.handleChange}
//                 onBlur={frm.handleBlur}
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <TextField
//                 fullWidth
//                 id="birthday"
//                 name="birthday"
//                 type="text"
//                 value={frm.values.birthday}
//                 onChange={frm.handleChange}
//                 onBlur={frm.handleBlur}
//                 label="Birthday"
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">
//                   Gender
//                 </FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                 >
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio checked={frm.values.gender} />}
//                     label="Male"
//                     onChange={(e, checked) => {
//                       frm.setFieldValue("gender", checked);
//                     }}
//                     id="male"
//                     name="gender"
//                   />
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio checked={!frm.values.gender} />}
//                     label="Female"
//                     onChange={(e, checked) => {
//                       frm.setFieldValue("gender", !checked);
//                     }}
//                     name="gender"
//                     id="female"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <TextField
//                 fullWidth
//                 id="role"
//                 name="role"
//                 type="text"
//                 value={frm.values.role}
//                 // value={frm.values.role.toUpperCase()}
//                 onChange={frm.handleChange}
//                 onBlur={frm.handleBlur}
//                 label="Role"
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <Autocomplete
//                 multiple
//                 id="certification"
//                 options={user?.certification}
//                 freeSolo
//                 value={frm.values.certification}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Certification" />
//                 )}
//                 onChange={(e, value, reson, details) => {
//                   frm.setFieldValue("certification", value);
//                 }}
//                 limitTags={4}
//               />
//             </Grid>
//             <Grid item xs={12} md={6} mt={1}>
//               <Autocomplete
//                 multiple
//                 id="skill"
//                 options={user?.skill}
//                 freeSolo
//                 value={frm.values.skill}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Skill" />
//                 )}
//                 onChange={(e, value, reson, details) => {
//                   frm.setFieldValue("skill", value);
//                 }}
//                 limitTags={4}
//               />
//             </Grid>
//           </Grid>
//           <DialogActions className="dialogActions">
//             <Button autoFocus onClick={handleClose} className="btn_cancel">
//               CANCEL
//             </Button>
//             <Button
//               type="submit"
//               onClick={handleClose}
//               autoFocus
//               className="btn_save"
//               style={{ background: "#17a2b8" }}
//             >
//               SAVE
//             </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default forwardRef(User);
