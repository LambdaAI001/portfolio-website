import { generateResumePdf } from "@/lib/resume-pdf";

export async function GET() {
  try {
    const pdfBytes = await generateResumePdf();

    return new Response(pdfBytes as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="john-doe-resume.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Failed to generate resume PDF:", error);
    return new Response("Failed to generate resume PDF", { status: 500 });
  }
}
