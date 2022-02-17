let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(2));
console.log(challenge.includes("Script"));
console.log(challenge.split(''));
console.log(challenge.split(' '));
console.log(('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon').split(', '));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(('You cannot end a sentence with because because because is a conjunction').indexOf("because"));
console.log(('You cannot end a sentence with because because because is a conjunction').lastIndexOf("because"));
//find the position of the first occurrence of the word because
console.log(('You cannot end a sentence with because because because is a conjunction').search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));
console.log(("30 days of").concat("JavaScript"));
console.log(challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log(parseInt("10"));
console.log(Math.round(parseFloat('9.8')));
console.log(("phython", "jargon").includes("on"));
console.log(("I hope this course is not full of jargon.").includes("jargon"));
//random number 1 to 100
console.log(Math.floor(Math.random() * 101));
//random number 50 to 100
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
console.log(Math.floor(Math.random() * 256));
console.log(("JavaScript").charAt(Math.floor(Math.random() * 10)));
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(('You cannot end a sentence with because because because is a conjunction').replace("because", "", "because", ""));

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log(("Love is the best thing in this world. Some found their love and some are still looking for their love.").match("love"));
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(('You cannot end a sentence with because because because is a conjunction').match("because"));
// Clean the following text and find the most frequent word (hint, use replace and regular expressions
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// Calculate the total annual income of the person by extracting the numbers from the following text.
const totalEarnings = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
