const quotes = [
    // Ancient Greek Philosophy
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "The mind is everything; what you think, you become.", author: "Buddha" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
    { text: "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.", author: "Socrates" },
    { text: "The whole is more than the sum of its parts.", author: "Aristotle" },
    { text: "Wonder is the beginning of wisdom.", author: "Socrates" },
    { text: "The aim of the wise is not to secure pleasure, but to avoid pain.", author: "Aristotle" },
    { text: "The only good is knowledge and the only evil is ignorance.", author: "Socrates" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.", author: "Socrates" },
    { text: "The energy of the mind is the essence of life.", author: "Aristotle" },
    { text: "The beginning of wisdom is the definition of terms.", author: "Socrates" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    
    // Modern Philosophy
    { text: "Whereof one cannot speak, thereof one must be silent.", author: "Ludwig Wittgenstein" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "The greatest happiness of the greatest number is the foundation of morals and legislation.", author: "Jeremy Bentham" },
    { text: "Man is born free, and everywhere he is in chains.", author: "Jean-Jacques Rousseau" },
    { text: "God is dead. God remains dead. And we have killed him.", author: "Friedrich Nietzsche" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
    { text: "The struggle itself towards the heights is enough to fill a man's heart.", author: "Albert Camus" },
    { text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" },
    { text: "Doubt is the origin of wisdom.", author: "René Descartes" },
    { text: "The greatest good for the greatest number.", author: "John Stuart Mill" },
    { text: "The only source of knowledge is experience.", author: "Albert Einstein" },
    
    // Eastern Philosophy
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "When you realize nothing is lacking, the whole world belongs to you.", author: "Lao Tzu" },
    { text: "The more you know, the more you realize you don't know.", author: "Confucius" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.", author: "Zen Proverb" },
    { text: "The obstacle is the path.", author: "Zen Proverb" },
    { text: "When the student is ready, the teacher will appear.", author: "Buddhist Proverb" },
    { text: "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear.", author: "Buddha" },
    { text: "The way to do is to be.", author: "Lao Tzu" },
    { text: "The superior man is modest in his speech, but exceeds in his actions.", author: "Confucius" },
    { text: "The more you know, the more you realize you don't know.", author: "Confucius" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    
    // Existentialism
    { text: "Hell is other people.", author: "Jean-Paul Sartre" },
    { text: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" },
    { text: "We are our choices.", author: "Jean-Paul Sartre" },
    { text: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
    { text: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard" },
    { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
    { text: "The function of freedom is to free someone else.", author: "Toni Morrison" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
    
    // Ethics and Morality
    { text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", author: "Immanuel Kant" },
    { text: "The greatest good for the greatest number.", author: "John Stuart Mill" },
    { text: "Virtue is knowledge.", author: "Socrates" },
    { text: "The only thing I know is that I know nothing.", author: "Socrates" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    
    // Metaphysics
    { text: "Everything that exists is born for no reason, carries on living through weakness, and dies by accident.", author: "Jean-Paul Sartre" },
    { text: "The world is all that is the case.", author: "Ludwig Wittgenstein" },
    { text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" },
    { text: "What is rational is actual and what is actual is rational.", author: "Georg Wilhelm Friedrich Hegel" },
    { text: "The real is rational and the rational is real.", author: "Georg Wilhelm Friedrich Hegel" },
    
    // Epistemology
    { text: "Doubt is the origin of wisdom.", author: "René Descartes" },
    { text: "The only source of knowledge is experience.", author: "Albert Einstein" },
    { text: "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason.", author: "Immanuel Kant" },
    { text: "The mind is furnished with ideas by experience alone.", author: "John Locke" },
    { text: "To be is to be perceived.", author: "George Berkeley" },

    
    // Political Philosophy
    { text: "The state is the march of God through the world.", author: "Georg Wilhelm Friedrich Hegel" },
    { text: "Property is theft.", author: "Pierre-Joseph Proudhon" },
    { text: "The philosophers have only interpreted the world, in various ways. The point, however, is to change it.", author: "Karl Marx" },
    { text: "The history of all hitherto existing society is the history of class struggles.", author: "Karl Marx" },
    { text: "The first duty of a man is to think for himself.", author: "José Martí" },
    { text: "The only real progress lies in learning to be wrong all alone.", author: "Albert Camus" },
    { text: "The only real question of philosophy is whether or not we should commit suicide.", author: "Albert Camus" },
    
    // Aesthetics
    { text: "Beauty is in the eye of the beholder.", author: "Margaret Wolfe Hungerford" },
    { text: "Art is the lie that enables us to realize the truth.", author: "Pablo Picasso" },
    { text: "The aim of art is to represent not the outward appearance of things, but their inward significance.", author: "Aristotle" },
    { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
    { text: "Art is the highest form of hope.", author: "Gerhard Richter" },
];

function getDailyQuote() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Use modulo to cycle through quotes if we have fewer than 365
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
}

function displayDailyQuote() {
    const quote = getDailyQuote();
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    
    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;
}

// Display quote when the page loads
document.addEventListener('DOMContentLoaded', displayDailyQuote); 