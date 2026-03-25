/**
 * Numbers shown across marketing (Portfolio, WebDev stats strip, Project showcase, About copy).
 * Keep these consistent—do not inflate on individual pages.
 */
export const companyStats = {
  projectsCompleted: "150+",
  clientSatisfaction: "98%",
  avgOrganicTrafficLift: "40%",
  teamExperienceYears: "25+",
  websitesDelivered: "550+",
  appsDelivered: "90+",
  activeAdCampaigns: "75+",
  yearFounded: "2018",
} as const;

/** Targets for the animated stats section (same labels as on service pages) */
export const animatedServiceStats = [
  { target: 150, suffix: "+", label: "Project Completed" },
  { target: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { target: 40, suffix: "%", label: "Average Increase in Organic Traffic" },
  { target: 25, suffix: "+", label: "Years of Combined Team Experience" },
] as const;
