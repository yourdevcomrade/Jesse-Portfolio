import { createServerFn } from "@tanstack/start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; company: string; projectDetails: string }) => data)
  .handler(async ({ data }) => {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jesseadesoji@gmail.com",
      replyTo: data.email,
      subject: `New inquiry from ${data.name}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Project Details:</strong></p>
        <p>${data.projectDetails}</p>
      `,
    });

    if (error) throw new Error(error.message);
    return { success: true };
  });