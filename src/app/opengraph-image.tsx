import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";
const BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://amaanwarsi.thedev.id";

export default function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex", // ✅ REQUIRED
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "60px",
                    background: "#fafafa",
                }}
            >
                {/* TOP */}
                <div
                    style={{
                        display: "flex", // ✅ REQUIRED
                        alignItems: "center",
                        gap: 20,
                    }}
                >
                    {/* Avatar */}
                    {/* <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#f97316",
              display: "flex", // ✅ REQUIRED
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              color: "white",
              fontWeight: 600,
            }}
          >
            A
          </div> */}
                    <div
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "flex",
                        }}
                    >
                        <img
                            src={`${BASE_URL}/images/hero-sec/avatar.png`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    {/* Name block */}
                    <div
                        style={{
                            display: "flex", // ✅ REQUIRED
                            flexDirection: "column",
                        }}
                    >
                        <span style={{ fontSize: 42, fontWeight: 600, color: "#111" }}>
                            Amaan Warsi
                        </span>
                        <span style={{ fontSize: 20, color: "#666" }}>
                            Software Engineer
                        </span>
                    </div>
                </div>
                {/* MIDDLE */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap", // ✅ allows wrapping naturally
                        maxWidth: 900,
                    }}
                >
                    <span
                        style={{
                            fontSize: 40,
                            lineHeight: 1.3,
                            color: "#111",
                            fontWeight: 500,
                        }}
                    >
                        Helping startups turn ideas into&nbsp;
                    </span>

                    <span
                        style={{
                            fontSize: 40,
                            lineHeight: 1.3,
                            color: "#222",
                        }}
                    >
                        scalable SaaS products and mobile apps,
                    </span>

                    <span
                        style={{
                            fontSize: 40,
                            lineHeight: 1.3,
                            color: "#444",
                        }}
                    >
                        and modern web experiences.
                    </span>
                </div>
                {/* TAGS */}
                <div
                    style={{
                        display: "flex", // ✅ REQUIRED
                        gap: 16,
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        "Full-Stack Engineer",
                        "SaaS Builder",
                        "Mobile App Developer",
                        "UI/UX Focused",
                    ].map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "10px 18px",
                                borderRadius: 999,
                                background: "#fff",
                                border: "1px solid #e5e5e5",
                                fontSize: 18,
                                color: "#333",
                            }}
                        >
                            {tag}
                        </span>
                    )
                    )}
                </div>

                {/* FOOTER */}
                <div
                    style={{
                        display: "flex", // ✅ REQUIRED
                        justifyContent: "space-between",
                        fontSize: 16,
                        color: "#615f5f",
                    }}
                >
                    <span>amaanwarsi.thedev.id</span>
                    <span>Moradabad, India</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}