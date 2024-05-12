// Type inference in zod
// When using zod, we’re doing runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information
import { z } from 'zod';
import express from "express";

// initializing an express application
const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// infering type of the userProfileSchema
type FinalUserSchema = z.infer<typeof userProfileSchema>;

// Define the route for upating profile information
app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({message: "Updates not validated"});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);