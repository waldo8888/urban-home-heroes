"use client";

import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function PrivacyPolicyClient() {
    const lastUpdated = "February 27, 2026";

    return (
        <Box sx={{ bgcolor: "#F8F4EF", minHeight: "100vh" }}>
            <SiteHeader />

            <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10 }}>
                <Container maxWidth="md">
                    <Stack spacing={4}>
                        <Box text-align="center">
                            <Typography variant="overline" sx={{ color: "#f07a2b", fontWeight: 700, letterSpacing: "0.1em" }}>
                                Legal Information
                            </Typography>
                            <Typography variant="h1" sx={{ color: "#0e2740", fontWeight: 800, mt: 1, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                                Privacy Policy
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                                Last Updated: {lastUpdated}
                            </Typography>
                        </Box>

                        <Divider />

                        <Section title="1. Introduction">
                            Urban Home Heroes ("we", "us", or "our") is committed to protecting the privacy of our customers in Ontario, Canada. This Privacy Policy outlines how we collect, use, and disclose personal information in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Ontario privacy laws.
                        </Section>

                        <Section title="2. Information We Collect">
                            We may collect personal information such as:
                            <ul>
                                <li>Contact information (name, address, telephone number, email address)</li>
                                <li>Service-related details (property characteristics, service history, maintenance records)</li>
                                <li>Payment information (billing address, payment method)</li>
                                <li>Website interaction data via cookies and analytics</li>
                            </ul>
                        </Section>

                        <Section title="3. How We Use Your Information">
                            We use your information to:
                            <ul>
                                <li>Provide requested home repair and maintenance services</li>
                                <li>Communicate regarding scheduling, quotes, and service updates</li>
                                <li>Process payments and maintain billing records</li>
                                <li>Improve our website and customer experience</li>
                                <li>Comply with legal and regulatory requirements in Ontario</li>
                            </ul>
                        </Section>

                        <Section title="4. Consent">
                            By using our services or providing your personal information, you consent to the collection, use, and disclosure of your information as described in this policy. You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice.
                        </Section>

                        <Section title="5. Disclosure to Third Parties">
                            We do not sell your personal information. We may share information with third-party service providers (e.g., payment processors, CRM tools) who assist in our operations, provided they agree to maintain the confidentiality of your data. We may also disclose information if required by law or to protect our rights and property.
                        </Section>

                        <Section title="6. Data Security">
                            We implement appropriate physical, organizational, and technological security measures to protect your personal information from unauthorized access, loss, or disclosure.
                        </Section>

                        <Section title="7. Access to Your Information">
                            You have the right to request access to the personal information we hold about you and to request corrections if the information is inaccurate or incomplete.
                        </Section>

                        <Section title="8. Contact Us">
                            If you have questions or concerns regarding our privacy practices, please contact our Privacy Officer at:
                            <Box sx={{ mt: 2, p: 2, bgcolor: "rgba(240, 122, 43, 0.05)", borderRadius: 2, border: "1px solid rgba(240, 122, 43, 0.1)" }}>
                                <Typography variant="body1" sx={{ fontWeight: 700 }}>Urban Home Heroes</Typography>
                                <Typography variant="body2">Email: urbanhomeheroes@gmail.com</Typography>
                                <Typography variant="body2">Phone: (416) 822-9741</Typography>
                                <Typography variant="body2">Vaughan, Ontario, Canada</Typography>
                            </Box>
                        </Section>
                    </Stack>
                </Container>
            </Box>

            <SiteFooter />
        </Box>
    );
}

function Section({ title, children }) {
    return (
        <Box>
            <Typography variant="h5" sx={{ color: "#0e2740", fontWeight: 700, mb: 2 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#455a64", lineHeight: 1.8 }}>
                {children}
            </Typography>
        </Box>
    );
}
