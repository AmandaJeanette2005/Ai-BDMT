const headlines = [
    "This Science-Backed, 4-Day Experience Unleashes Your Life’s True, Untapped, Maximum Potential",
    "How To Get ALL Of Your Sales Letters, Scripts And Webinar Slides, Emails And Ads Written (In As Little As 10 Minutes) WITHOUT Hiring An Expensive Copywriter!?",
    "Over 156,000 Already Use This Oriental Method to Melt Off 1 lb Fat Every 48 Hours",
    "Get Instant Access To A Simple, Proven Webinar Framework That Has Turned HUNDREDS Of Entrepreneurs Into 'Two Comma Club' Winners!",
    "How I Wake Up With An Additional $1,000 - $5,000 Per Day In My Bank Account Every Single Day",
    "Strange 'Mouth Detox' Makes You Appear 10 Years Younger..— Whitens Teeth Up To 6 Shades In Less Than 16 Minutes...",
    "How You Can Write Your Very Own Best-Selling, Cash-Inducing Book In Less Than 24 Hours…",
    "Make $30,000 With Your Facebook™ Group In The Next 90 Days Guaranteed",
    "Get Your Free Copy Of The 7 Money Models We Use To Scale Gyms To Over $100,000 Like Clockwork",
    "How You Can Wake Up With An Additional $1,000-$5,000 In Your Bank Account Every Single Day",
    "A Proven 6-Step System to Change Your Brain & Radically Transform Your Impact, Income, Business, & Life",
    "Discover how you can scale thanks to your Sales Team with Setters & Closers to generate 50-500k€/month in High Ticket sales",
    "ONLINE MARKETING JUST GOT WAY EASIER. (at least according to the 40,000+ folks we've helped so far...)",
    "The 45 Minute ‘No Pitch’ Webinar Thats Generated $238,304 In The Past 4 Weeks  WITHOUT Actually ‘Selling’ Our Program!",
    "See How We Get 100-200 Group Members Per Day & Convert Them Into 40-60 High Ticket Clients Each Month",
    "GET DOUG'S '5 SIMPLE STEPS TO TURN YOUR PASSION INTO A 6-FIGURE ONLINE BUSINESS",
    "We Will Custom Build You This EXACT Website... So You Can EARN $100 Or MORE, Every Day From Your Phone, Anywhere In The World!",
    "HOW TO MAKE $10,000 PER MONTH WITH AIRBNB USING OUR A.A. STRATEGY... IN THE FIRST 90 DAYS OF 2023",
    "See How I Went from a Broke Student to Making Over $100K In Profit Under 60 Days",
    "Built By A Team Responsible  For 8+ Figures In Revenue & Nearly 1M People Across Our Facebook™ Groups",
    "5 Mistakes Credit Repair Businesses Make That Prevent Them From Making $50K a Month",
    "How Everyday People Are Using Forbidden Mind Control Psychology and Ruthless Military Tactics to Make Millions Online.",
    "New Book Reveals How To Wholesale 3-5 Houses Per Month And Become Financially Free Without Using Your Cash Or Credit",
    "How to make $100,000 in 2023 as a Certified Appointment Setter By simply speaking on the phone or messaging people (That's it)",
    "Discover How To Go From $0 to $10,000 per month Online Business In 90 Days Or Less From Scratch",
    "TAKE ALL MY TOP SECRETS I USE TO MAKE 50K A MONTH SO YOU CAN WIN THE ECOM BATTLE",
    "This Is EXACTLY How I Retired My Wife in 30 Days... and I'm Giving It All Away For Just $1!",
    "What If You Had a YouTube Automation Channel That Makes 31 Videos Per Month For You?",
    "Learn The Exact Strategy I Used To Make $125,000+ In 31 Days Selling Just One Product Online",
    "The Proven Formula Used in Sales Videos, Webinars and Offline Events That Has Generated Over 8- Figures In Sales... Without Being Sleazy, Pushy or Manipulative",
    "Get Access To A Proven System Printers Use For Print Estimating, Tracking Jobs, PO's, Stock, Invoices, Online Orders & More...",
    "HOW WE GET $10,000-$15,000 PER MONTH CONSISTENTLY WHILE TRADING 2-4 HOURS PER DAY AND FOCUSING ON ONLY 1 PROVEN METHOD",
    "Discover How We Source, Develop And Launch Winning Amazon Products That Generate As Much As $1,000,000 In Sales",
    "Discover 5 Simple Steps To Build YOUR Own Wildly Profitable $100,000 Online Business Without ANY Product in just 1 year..",
    "How to TALK TO GIRLS and Spark ATTRACTION Within Seconds!",
    "BREAKING FREE FROM DIABETES. Discover The Proven Method To Reverse It Naturally..",
    "Go From Feeling Talentless, Doubting Each Brushstroke, And Afraid To Show Off Your Work To Proud Of Your Watercolor Painting Skills In Just 3 Days (Even If You Can’t Draw A Stick Figure)",
    "Watch And Read Below To Find Out How We've Helped 538 People Crack The Stock Market Code And Earn 6 Figures Per Year Trading Stocks",
    "Discover How I Built A Team of 300,000+ Customers Using Social Media",
    "how you can earn €1,000 commission per customer as an e-learning affiliate",
    "get our list of 322+ FREE Tools & Resources to start and grow your dream business today",
    "How I Made $118, 932 in Profit by Only Trading 10 Min./Day Using the Value Zone Strategy Without trading for 4-8 hrs./day, bots, and pricey platforms",
    "Simple 'Twist' On An Easy Method Makes $372 Per Hour Just Rinse & Repeat...",
    "How I Lost 30 lbs in 3 Months Without Diet or Exercise ",
    "Discover How One Quiz Funnel Generated 1,270,000 Leads & $5+ Million",
    "Definitive path for eCom brand from 1 → 10 million in 6 months with 5 employees",
    "Get THE “BioMASS Bass Attractor” Multi-Joint Swimbait At 70% OFF Today!",
    "EXPOSED: $137 BILLION Dollar Crypto Loophole In 43 Seconds, “Insta Blast” Our Never-Ending Free Buyer Traffic",
    "Get My Top 22 Sales Funnels For FREE Inside Of The NEW Funnel Cookbook!",
    "[1-CLICK] Force Facebook, Google, Amazon To ADD 1000'S OF BUYER LEADS EVERY DAY To Your List WITHOUT Ads, Traffic Or Skills And That Makes Us $511.03 Per Day!",
    "How A 22 Year Old Makes $100,000+ Per Month With Instagram...",
    "Start Trading Like The Top 1% Professional Traders",
    "Weird 'Pay-Per Show' Model Gets Ads Agency 177 NEW Clients in a Saturated Niche",
    "How ANYONE Can Tap Into A $12 BILLION Market Using 5-Second “Silent” Videos",
    "The NEW  Way To Build An Online Business That Has Helped THOUSANDS Make Their First $1000 Online",
    "This Bare-Bones 2-Page Funnel Generated  Over 185,372 Leads For Us...",
    "GET FUNDED UP TO $10,000,000 & KEEP 90% – 100% PROFIT SHARE & WE COVER THE LOSSES",
    "How I Went From $30K To $108K/Year As A Certified Digital Marketing Consultant...",
    "Find out how one of our hidden contacts discovered TikTok's secret algorithm and exploited it to generate up to €2,000 per day by investing ZERO in advertising",
    "Get EVERYTHING You Need To Start Earning $1000s In Affiliate Commissions Today For FREE",
    "How I Built a $5,500,000 Business from Scratch in 90 Days Starting with Zero Contacts and Just $100",
    "Earn $180.00 PER SQUARE FOOT Working From Home Right In Your Own Backyard",
    "4 Proven 'Organic' Social Media Strategies We Use To Book 30-40+ NEW Clients CONSISTENTLY",
    "HOW WE GENERATE $100,000 - $5,000,000 IN ADDED TOP-LINE REVENUE IN 90 DAYS",
    "Join the Community Responsible for Creating the Most Pay-Per-Lead Millionaires...FOR JUST $1",
    "3-Day Online Workshop Reveals How To Attract $5k Website Clients While Working 50% Less",
    "Find Out How To Land Your First Paying Client That Pays You $1,000 To $3,500+ In The Next 4 Weeks (Or Less)",
    "Learn the exact step-by-step evergreen strategies we used to scale Lions Not Sheep Apparrel from $0 - $5,000,000+ in just 12 months",
    "A Proven, Step-By-Step, 1-on-1 Coaching Program to Scale Your Digital Marketing Agency to $30K+/Mo",
    "'Weird Trick' Makes Us $513 Per HOUR & Works With ANY Affiliate Product WITHOUT EVER PROMOTING IT",
    "Revealed: The Secret C-P-M-A-System That Banked Me $547,260 Through Instagram™ Before I Turned 19",
    "Earn 60% On WarriorPlus & JVZoo + $2,650 CASH Prizes, $19k/Month Reciprocation...With Our $10k YouTube+Traffic+Affiliate 4-in-1 NEW 2020 Software Apps",
    "How Entrepreneurs, Former Pro Athletes & Dads Can Get Lean & Jacked In 90 Days (Or Less)... Even If They Have 10, 15 Or 20 Lbs To Lose",
    "THE ALMOST-UNKNOWN REASON WHY 99.9% OF MEN FAIL TO ATTRACT GORGEOUS WOMEN",
    "Would You Like Me To Hand You The Exact Blueprint Showing What  The TOP 1% of ClickFunnels Users Are Doing Differently That The Other 99% Are Not...  ...For FREE!?!",
    "How I Launch with as Little as 1 – 2 Days of Work and Convert 3-5% of Attendees Using this Fill-in-the-Blank Webinar “T.A.N.G.O.” Template Pack",
    "How a Broke Kid, Living Out Of A Motel Room With 7 People, Changed His Life Forever After Discovering The ‘Mail Box Secrets’ to Making MULTI-MILLIONS",
    "NAVIGATE AND MAXIMIZE YOUR PART OF THE $2.2 TRILLION STIMULUS BILL",
    "THE 4 STEPS TO TURN YOUR MESSAGE Into A Leads & Fame Machine For Your Business...USING ORGANIC YOUTUBE",
    "Flat Sale ONLY For Today - Special Offer Save Upto $300 + Free US Shipping + 60 Day Money Back Guarantee",
    "BAGAIMANA SAYA MENDAPAT UNTUNG Lebih dari R$10 ribu per hari, TANPA BANYAK MEMAHAMI Internet atau Meninggalkan Rumah",
    "NEW APP  FORCES PROFITS Of $354+ Per Day Into Our Accounts",
    "You Are Free To Increase Your Leads & Sales 'Almost Like Magic,'  By Tapping Into Proven Psychological Triggers That Build Trust & Prevent Your Prospects From Ignoring You! ",
    "THE 4 STEPS TO TURN YOUR MESSAGE Into A Leads & Fame Machine For Your Business... USING ORGANIC YOUTUBE",
    "How To Get At Least 4 New Clients A Month Using FREE Tools You Probably Already Have…",
    "My Unexpected Service That's Currently Making Me $2000 PER DAY!",
    "MEGA-SCALE TO 7, 8 AND 9 FIGURES FAST WITH YOUR MOST PROFITABLE CAMPAIGNS EVERYWHERE ON THE WEB",
    "LAUNCH, BUILD, GROW, AND MONETIZE YOUR ONLINE PRESENCE LIKE NEVER BEFORE",
    "Are You Ready To Get In The Room With The Savviest Marketers In The Game Doing A Combined $400MM Using The Latest Direct Response Tactics & Strategies?",
    "Regular guy defeats the gurus of rehash and discoveries teh secret to $10.000 per month in his spare time",
    "Make Bank From Social Media – With Less Than 1,000 Followers",
    "November 27th: Earn 60% On WarriorPlus & JVZoo + $4,100 CASH Prizes, $19k/Month Reciprocation...With Our $10k Amazon + Christmas Affiliate 5x NEW Software Suite!",
    "Use Our Forex Trading System From Your Phone For FIVE MINUTES A DAY To Win 96.5% Of The Time Using Our Trades.",
    "THE ULTIMATE GUIDE TO MARKETING YOUR GYM Plus Over $2000 Worth Of Swipes, Tutorials And Resources",
    "How My Wife Lost 20 Pounds, Shed 6 Inches, And Healed Her Diastasis Recti After Her FOURTH Baby",
    "From € 900 per month as a tire dealer to € 1,000,000 Invoiced Working from Home",
    "HOW TO EARN YOUR FIRST 3 CF SIGN UPS IN FIVE DAYS",
    "The 3 LeadGen Strategies I Used To Auto-Close 1178 People Into My Own Downline",
    "Who Else Wants Up To $2,000 Cash Payments Delivered To Your Mailbox AND... Up To $16,500 In Extra Commissions On Autopilot",
    "Every Tool, Strategy, and Step You Need To Build a $500 to $3,000 Per Month Side Income in 30-60 Days",
    "40 Years of Research Found That People With This One Quality Are More Likely to Succeed",
    "Finally, Discover How My Clients Are Instantly Shattering Their Limiting Beliefs That Were Putting A Ceiling On Their Revenue, Once And For All, Using 1 Simple Process That Can Take Place In As Little As 5 Mins - 100% Guaranteed!",
    "Discover The Easiest Low-Tech Strategy For Coaches, Consultants & Knowledge-Based Experts To Win High Paying Clients From Your Existing Network Without Complicated Ads, Funnels, or webinars",
    "Unique System Banks A Total Newbie $214.83 Per Hour Using 100% Free Traffic",
    "Breakthrough Software “AUTOMATES” FREE Traffic, Leads & Commissions in Less Than 60 Seconds...",
    "Discover How I'm Raking In An Easy $11,202 Per Day Online!",
    "Ready To Scale Past 5 & 6 Figures By Getting Funded Up To 300k To Leverage with Our Private Profile Method™",
    "How I Finally Got An Agent, Quit My Day Job, and Made $85,000 Acting On TV... And How You Can Too!",
    "Give Me 3 Days Or Less And You’ll Have A... Fully-Functional, Mostly-Automated Lead Generation Website Up-And-Running And Ready To Make You Money",
    "Free Webinar: The NEW Way to Sell PPC With a 75% Profit Margin - That Focuses on Serving the Average Business Owner",
    "Free Training Reveals Powerful Viral System that generates $500+ a day on Autopilot",
    "How To Eliminate BPPV Vertigo In As Little As 3 Minutes And Keep It From Coming Back",
    "This Weird Method Makes $239 Per Hour With NO Videos, NO Websites And NO Paid Traffic",
    "Don’t Look At Buying Any Business or Franchise System Until You Read This",
    "Exclusive Training Reveals the 3-Step Plug-and-Play System to Create a $5-10K/Month Content Agency in Just 30 Days",
    "My secrets to building a  Profitable Instagram Business/Brand & Making Over $5.000 Per Month",
    "The Epic “Pitch Video Weapon” Churns Out Attention Grabbing - Profit Pulling Videos in ANY Niche in 60 Mins Flat",
    "Accounts Are FLOODING With $798+ Commissions From Only 10 Minutes Of Work Per Day",
    "We Create High-Converting Landing Page That Attracts And Sells For You (Without Paying $25,000 Or Even $10,000)",
]

module.exports = headlines