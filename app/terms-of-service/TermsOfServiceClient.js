"use client";

import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function TermsOfServiceClient() {
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
                                Terms of Service
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                                Last Updated: {lastUpdated}
                            </Typography>
                        </Box>

                        <Divider />

                        <Section title="1. Acceptance of Terms">
                            By accessing the Urban Home Heroes website (urbanhomeheroes.ca) or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Province of Ontario, Canada. If you do not agree with any of these terms, you are prohibited from using this site or our services.
                        </Section>

                        <Section title="2. Description of Services">
                            Urban Home Heroes provides general contracting, home repair, and seasonal maintenance services (the "Services"). Specific details, pricing, and timelines for Services will be provided in a written quote or estimate after a site inspection.
                        </Section>

                        <Section title="3. Estimates and Quotes">
                            All estimates provided are based on the information available at the time of inspection. Final pricing may vary if unforeseen conditions are discovered during the performance of the Services. We will provide notice of any significant price changes before proceeding. Estimates are valid for 30 days unless otherwise stated.
                        </Section>

                        <Section title="4. Payment Terms">
                            Payment is due upon completion of the work unless otherwise agreed in writing. For larger projects, a deposit and progress payments may be required. We accept cash, e-transfer, and major credit cards as specified on your invoice. Late payments may be subject to interest charges.
                        </Section>

                        <Section title="5. Customer Responsibilities">
                            The customer is responsible for:
                            <ul>
                                <li>Providing clear access to the work area</li>
                                <li>Ensuring the work area is safe and free of hazards</li>
                                <li>Obtaining any necessary condo or HOA approvals (we will assist with municipal permits where required)</li>
                                <li>Identifying any hidden utility lines or hazards known to the occupant</li>
                            </ul>
                        </Section>

                        <Section title="6. Warranty and Liability">
                            We stand by our workmanship. Most repairs include a limited warranty on labour for a specified period from the date of completion. Materials are subject to the manufacturer's warranty. To the maximum extent permitted by Ontario law, Urban Home Heroes' liability for any claim shall not exceed the total amount paid by the customer for the specific service in question.
                        </Section>

                        <Section title="7. Cancellation Policy">
                            Cancellations for scheduled services must be made at least 24 hours in advance. Failure to provide sufficient notice may result in a cancellation fee.
                        </Section>

                        <Section title="8. Governing Law">
                            These terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising out of these terms or our services shall be subject to the exclusive jurisdiction of the courts of Ontario.
                        </Section>

                        <Section title="9. Changes to Terms">
                            Urban Home Heroes reserves the right to revise these terms at any time without notice. By using this website or our services, you are agreeing to be bound by the then-current version of these Terms of Service.
                        </Section>

                        <Section title="10. Contact">
                            For questions regarding these terms, please contact us at:
                            <Box sx={{ mt: 2, p: 2, bgcolor: "rgba(240, 122, 43, 0.05)", borderRadius: 2, border: "1px solid rgba(240, 122, 43, 0.1)" }}>
                                <Typography variant="body1" sx={{ fontWeight: 700 }}>Urban Home Heroes</Typography>
                                <Typography variant="body2">Email: info@urbanhomeheroes.ca</Typography>
                                <Typography variant="body2">Phone: (416) 822-9741</Typography>
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
