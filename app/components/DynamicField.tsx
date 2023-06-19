"use client";
import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  useTheme,
  TextField,
} from "../lib/mui";
import Input from "./Input";
import { motion } from "framer-motion";
import { tokens } from "../lib/theme";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "@mui/icons-material";
import { CourseProps } from "../types/_types";
import {
  Control,
  FieldArrayWithId,
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";

interface DynamicFieldProps {
  fields: FieldArrayWithId<CourseProps, "prerequisites", "id">[];
  registeredName: string;
  register: UseFormRegister<CourseProps>;
  onAppendHandler: () => void;
  label: string;
  btnText: string;
  error?: FieldErrors<CourseProps>
  helperText:string | undefined
}

export default function DynamicField({
  fields,
  registeredName,
  onAppendHandler,
  register,
  label,
  btnText,
  error,
  helperText
}: DynamicFieldProps) {
  const MotionBtn = motion(Button);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  return (
    <>
      {fields.map((field, index) => (
        <Grid container item xs={12} md={6} key={field.id}>
          <TextField
            id="prerequisites"
            label={label}
            variant="filled"
            type="text"
            error={!!error }
            helperText={helperText}
            fullWidth
            {...register(`${registeredName}.${index}.name` as unknown as any ,{required: true} ) }
            />
          {error  && <p style={{color:"red"}}>This fieid is required</p>}
        </Grid>
      ))}

      <Grid container item>
        <MotionBtn
          whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
          variant="contained"
          size="large"
          onClick={onAppendHandler}
          sx={{
            backgroundColor: colors.rose[500],
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "18px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: "28px", fontWeight: "bold" }} /> {btnText}
        </MotionBtn>
      </Grid>
    </>
  );
}
