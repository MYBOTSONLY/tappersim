module.exports = {
    name: 'pet',
    category: 'Fun',
    description: 'Find Pet Values!',
    options: [
        {
            type: 6,
            name: 'petname',
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

Type: Normal â”ƒ Price: 5M:gem: â”ƒ Demand: 10/10
Type: Shiny:sparkles: â”ƒ Price: 20M:gem: â”ƒ Demand: 10/10
Type: Rainbow:rainbow: â”ƒ Price: 50M:gem: â”ƒ Demand: 10/10```,
                ephemeral: false
            });
        }
    }
}
