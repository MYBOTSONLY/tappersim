module.exports = {
    name: 'website',
    category: 'General',
    description: 'Displays the website link.',
    usage: 'website',
    run: async (interaction, client) => {
        return interaction.reply({
            content: `https://sites.google.com/view/vlvalues/`,
            ephemeral: true
        });
    }
}