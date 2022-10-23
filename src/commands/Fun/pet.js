module.exports = {
    name: 'Pet',
    category: 'Fun',
    description: 'Find Pet Values!',
    options: [
        {
            type: 6,
            name: 'Pet Name',
            focused: true,
            description: 'What is the pet name?',
            required: true
        }
    ],
    run: async (interaction, client) => {
        const member = await interaction.options.getUser('Pet Name');
        if(member == 'Sour Slug'){
            interaction.reply({
                content: ``` __**Sour Slug**__
(LEGENDARY)

Type: Normal ┃ Price: 5M:gem: ┃ Demand: 10/10
Type: Shiny:sparkles: ┃ Price: 20M:gem: ┃ Demand: 10/10
Type: Rainbow:rainbow: ┃ Price: 50M:gem: ┃ Demand: 10/10```,
                ephemeral: false
            });
        }
    }
}