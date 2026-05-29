import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { name: string; email: string; company: string; projectDetails: string } }) => {
    const { data: result, error } = await resend.emails.send({
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

    console.log("Resend result:", result);
    console.log("Resend error:", JSON.stringify(error, null, 2));

    if (error) throw new Error(error.message);
    return { success: true };
  });