"use strict";

const express = require("express");

const Blog = require("../models/blog");

const multer = require("multer");

const cloudinary = require("cloudinary");

const storage = multer.diskStorage({
  filename(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

const imageFilter = (req, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter: imageFilter });

cloudinary.config({
  cloud_name: "dwsbpkgvr",
  api_key: "246382268158277",
  api_secret: "OEJwFk8xMOuNID7Z7L5MNDJ9nY8"
});

const router = express.Router();

// router
//   .route("/")
//   .get(function(req, res) {
//     Blog.where(req.query)
//       .fetchAll()
//       .then(function(blogs) {
//         console.log(blogs);

//         res.json({ blogs });
//       });
//   })
//   .post(function(req, res) {
//     console.log("req.body", req.body);

//     new Blog({
//       title: req.body.title,
//       content: req.body.content,
//       image_url: req.body.image_url,
//       created_at: req.body.created_at,
//       updated_at: req.body.updated_at
//     })
//       .save()
//       .then(function(blog) {
//         return res.send({ blog });
//       });
//   });

router.get("/", (req, res) => {
  Blog.where(req.query)
    .fetchAll()
    .then(blogs => {
      res.json({ blogs });
    });
});

router.post("/", upload.single("image"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, result => {
    // add cloudinary url for the image to the object under image property
    console.log(result.secure_url);
    // console.log("req.body,", req.body);

    //res.json(result);
    new Blog({
      title: req.body.title,
      content: req.body.content,
      image_url: result.secure_url,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at
    })
      .save()
      .then(function(blog) {
        return res.json({
          ok: true,
          blog,
          message: "Saved"
        });
      });
  });
});

router.get("/:id", (req, res, next) => {
  Blog.where("id", req.params.id)
    .fetch()
    .then(blog => {
      res.json(blog);
    });
});

// router.("/:id")
//   .get(function(req, res) {
//     Blog.where("id", req.body.id).then(function(blog) {
//       res.json({ blog });
//     });
//   })
//   .put(function(req, res) {
//     Blog.where("id", req.params.id)
//       .fetch()
//       .then(function(blog) {
//         blog
//           .save({
//             title: req.body.title,
//             content: req.body.content
//             //emailAddress: req.body.emailAddress
//           })
//           .then(function(saved) {
//             res.json({ saved });
//           });
//       });
//   });
// delete function(req, res) {
//   Blog.where("id", req.params.id)
//     .destroy()
//     .then(function(destroyed) {
//       res.json({ destroyed });
//     });
// };

router.put("/:id", (req, res, next) => {
  Blog.where("id", req.params.id)
    .fetch()
    .then(blog => {
      blog
        .save({
          title: req.body.title,
          content: req.body.content
        })
        .then(blog => {
          res.json({
            ok: true,
            blog,
            message: "Blog Updated"
          });
        });
    });
});

router.delete("/:id", (req, res) => {
  Blog.where("id", req.params.id)
    .destroy()
    .then(destroyed => {
      res.json({
        message: "deleted"
      });
    });
});

module.exports = router;
