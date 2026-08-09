"use server";

import { getDb } from "@/lib/mongodb";


export async function addUser(formData: FormData) {
  const db = await getDb();
  const users = db.collection("users");
  await users.insertOne({
    username: formData.get("username"),
    password: formData.get("password"),
  });
}