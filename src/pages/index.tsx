import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  Paper,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { keyframes } from "@mui/system";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const hoverGrow = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Ansaar – Backend Developer",
    description: "https://www.ansaar.in/",
  },
  {
    title: "Evaluer – Backend APIs by Me",
    description: "https://www.evaluer.online/",
  },
  {
    title: "Source Vehicle – Contributor in Backend",
    description: "https://staging.sourcevehicle.com",
  },
  {
    title: "Maair Cooling – AC Repair Website (Recent)",
    description: "https://www.maaircooling.in",
  },
  {
    title: "Budget Tracker – Flutter + Backend (Android App)",
    description: "https://play.google.com/store/apps/details?id=com.budgetTracker.app",
  },
  {
    title: "Career Guides – Flutter + Backend (Android App)",
    description: "https://play.google.com/store/apps/details?id=com.career_guides",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 4, pb: 8, position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              animation: `${float} 4s ease-in-out infinite`,
              color: "#ffffff",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Abdul Kadir
          </Typography>
          <Typography variant="h6" sx={{ color: "#e0e0e0" }} gutterBottom>
            Backend Developer & DevOps Engineer
          </Typography>
          <Typography variant="body2" sx={{ color: "#cccccc" }}>
            Mumbai, India • +91-9930-514782 •{" "}
            <Link href="mailto:kadirab1999@gmail.com" underline="hover" color="inherit">
              kadirab1999@gmail.com
            </Link>
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={3}
            mt={2}
            sx={{
              "& a:hover": {
                transform: "scale(1.2)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Link
              href="https://www.linkedin.com/in/abdul-kadir-mukadam-63957422b/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://github.com/Kadir70-dev"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Stack>
        </Box>

        <Divider sx={{ mb: 4, bgcolor: "#444" }} />

        {/* About */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.7, color: "#e0e0e0" }}
          >
            Experienced Backend Developer and DevOps Engineer with a proven track record in
            building scalable backend systems using Node.js and managing DevOps pipelines with
            Kubernetes, Docker, and Argo CI/CD. Skilled in Ubuntu server management, monitoring
            with Grafana, and volume management with Longhorn.
          </Typography>
        </Box>

        {/* Skills */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
            Skills
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#e0e0e0",
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              <strong>Languages & Frameworks:</strong> JavaScript, TypeScript, Python, PHP, Node.js, Express, NestJS, FastAPI, GraphQL, REST, WebSockets<br />
              <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Redis<br />
              <strong>DevOps:</strong> Docker, Kubernetes, AWS, Rancher, Helm, Argo CD, Grafana, Linux
            </Typography>
          </Paper>
        </Box>

        {/* Projects */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
            Projects
          </Typography>
          <Grid container spacing={3} columns={12}>
            {projects.map(({ title, description }, index) => (
              <Grid key={index} gridColumn={{ xs: "span 12", sm: "span 6" }}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    height: "100%",
                    animation: `${float} 5s ease-in-out infinite`,
                    transition: "transform 0.3s ease",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.03)",
                      boxShadow:
                        "0 10px 20px rgba(25, 118, 210, 0.4), 0 6px 6px rgba(25, 118, 210, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    <Link
                      href={description}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                    >
                      {title}
                    </Link>
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" gutterBottom sx={{ color: "#ffffff" }}>
            Get In Touch
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:kadirab1999@gmail.com"
            size="large"
            sx={{
              animation: `${float} 4s ease-in-out infinite`,
              "&:hover": {
                animation: "none",
                transform: "scale(1.05)",
              },
            }}
          >
            Email Me
          </Button>
          <Typography variant="body2" sx={{ color: "#cccccc", mt: 2 }}>
            Phone: +91-9930-514782
          </Typography>
        </Box>

        {/* Footer */}
        <Box mt={10} mb={4} textAlign="center" sx={{ color: "#888" }}>
          &copy; {new Date().getFullYear()} Abdul Kadir. All rights reserved.
        </Box>
      </Container>
    </>
  );
};

export default Home;