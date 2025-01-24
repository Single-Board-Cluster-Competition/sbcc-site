export type Competetion = {
    date: Date;
    title: string;
    registrationLink: string;
    discordServerInvitationLink: string;

}

const dateOfCompetition = new Date(2024, 4, 10);
export const competition: Competetion = {
    date: dateOfCompetition,
    title: "SBCC " + dateOfCompetition.getFullYear(),
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf2G1_WHESsOae1EkMFvx3HavikLMjG_h_9BGULU1bJcBlxUg/viewform?usp=preview",
    discordServerInvitationLink: "https://discord.gg/G6rJrXNrnc",
}