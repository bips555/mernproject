const {z}=require('zod')
const registerschema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    role: z
      .string()
      .regex(/admin|customer|seller/)
      .default("customer"),
    status: z
      .string()
      .regex(/active|inactive/)
      .default("inactive"),
  });
  module.exports={registerschema}