"use client";
import { Box, Button, Grid, Typography, useTheme } from "@/app/lib/mui";
import { tokens } from "@/app/lib/theme";
import { PostType } from "@/app/types/_types";
import { formatDate } from "@/app/utils/formatDate";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardProps {
  blog: PostType;
}

export default function Card({ blog }: CardProps) {
  const imageURL =
    "https://a6e8z9v6.stackpathcdn.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/title-comscience.jpg";

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionBtn = motion(Button);

  return (
    <Grid container item xs={12} md={6} height="850px" m="10px 0">
      <Box width="100%">
        <Image
          src={blog.image}
          alt="image"
          height={1000}
          width={1000}
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </Box>
      <Grid m="10px 0">
        <Typography variant="h2" fontWeight="bold">
          {blog.title}
        </Typography>
        <Typography m="10px 0">
          <span> {formatDate(blog.createdAt!)} </span>{" "}
          <span> / BLOG / {blog.postSlug}</span>
        </Typography>

        <Typography variant="h5">{blog.subtitle}</Typography>
      </Grid>
      <MotionBtn
        whileHover={{ scale: 1.1, backgroundColor: colors.rose[600] }}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: colors.rose[500],
          fontWeight: "bold",
          fontSize: "18px",
          color: colors.primary[900],
          cursor: "pointer",
        }}
      >
        Read More
      </MotionBtn>
    </Grid>
  );
}
