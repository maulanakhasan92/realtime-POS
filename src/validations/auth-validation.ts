import z from "zod";

export const loginSchema = z.object({
	email: z
		.string()
		.regex(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Format email tidak valid"
		)
		.min(1, "Email tidak boleh kosong"),
	password: z.string().min(1, "Password tidak boleh kosong"),
});

export type LoginForm = z.infer<typeof loginSchema>;
