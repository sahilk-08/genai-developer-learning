# GenAI Developer Learning

## Name
Sahil Kumawat
## Current Coding Level
Intermediate Python Developer
## Why I Want to Learn GenAI
I want to build AI assistants, RAG systems, and automation tools.
## DAY 1 TASK One Project Idea
A chatbot that answers questions from PDFs using LangChain.
# pytest 
pip install pytest
run pytest 


pytest is tells us that our main.py code is running sucessfull or not means all usecases are run or not 
real devlopers use this also. 

Ye automatically:

functions run karta hai
expected output compare karta hai
batata hai pass/fail

Real companies me bhi testing hoti hai


# Day 2 task 
Skill	Benefit
Prompt Engineering	AI ko smartly use karna
Python Functions	Logic building
Debugging	Errors solve karna
Testing	Professional coding
GitHub	Portfolio banana
Documentation	Developer habit
Pytest	Industry-level testing

# benifits 
GitHub repo creation
Folder structure
Basic Git commands
Code commit and push flow
Maintaining work properly like a developer

# Benifits of this task 
Prompt engineering
AI se sahi question puchna
AI answer ko samajhna
Documentation habit


# day 3 task  create portfolio using copilot in vs code and run it in local hoast and after that host at server 
# create a website of your portfolio and run first it on local host then tryinn to host it server before you learn things make sure you learn properly about the task before start

1st : open vs code then create a folder name as portfolio in root folder 
2nd: VS Code → Extensions (Ctrl+Shift+X) → search GitHub Copilot → install.
3rd: create a two files in portfolio folder index.html $ style.css
4rt: create your portfolio based on your requirments and here PROMT ENGG is very usefull


we can create anything we want from copilot, but we should keep in our mind that what we actually want to creat from ai models, because if we don't have clear instructions, we definatly got confused from ai's brainstrom responces 
so we should give exact intructions to ai as PROMPTS that what we want exactly 

here what i get from my task, starting phase like brainstroming from copilot's responses
1. first i setup my copilot install , and use 
2. for any ai PROMPTS very important 
3. my prompt 
Create a modern, professional portfolio website using HTML, CSS, and JavaScript based on my resume details:

**Personal Info:**
- Name: Sahil Kumawat
- Email: sahilkumawat613@gmail.com
- Phone: +91 8690543737
- LinkedIn: linkedin.com/in/sahilk07/
- GitHub: github.com/sahilk-08

**About Me:**
Computer Science student specializing in AI & ML, with expertise in Generative AI, Agentic AI, LLMs, and LangChain-based development. Proficient in Python and Java with hands-on experience building RAG pipelines, Multi-Agent AI systems, and NLP applications.

**Education:**
University of Engineering & Management, Jaipur
B.Tech – CSE (AI & ML Specialization) | 2022–2026 | CGPA: 7.66

**Skills:**
- Programming: Python, Java, OOPs, Collections
- GenAI & LLMs: LangChain, RAG Pipelines, CrewAI, Ollama, Prompt Engineering
- Deep Learning & NLP: ANN, RNN, CNN, Transformers, Hugging Face
- Libraries: Pandas, NumPy, Matplotlib, Streamlit, ReportLab
- Tools: GitHub, n8n, Google Colab
- Databases: ChromaDB, Pinecone, Weaviate
- CS Core: DSA, DBMS, OS, Computer Networks

**Projects:**
Multi-Agent AI Research System (April 2026)
   - Built with CrewAI, LangChain, Gemini 2.5, Groq
   - Orchestrated Researcher + Writer agents with fallback retry logic
   - Streamlit app with real-time web search, PDF export, RAG-style chat
   - 60% faster research-to-report generation

RAG-Based ChatBot System (Nov 2025)
   - Built with Python, LangChain, ChromaDB, PyPDFLoader
   - End-to-end RAG pipeline processing 364-page PDFs
   - 500+ document chunks indexed, semantic search under 200ms

**Experience:**
Generative AI Intern – AICTE EduSkills (Oct–Dec 2025)
   - LLMs, LangChain, Prompt Engineering, RAG workflows

Python Fullstack Developer Intern – AICTE EduSkills (Jan–Mar 2026)
   - AI-integrated web apps, MySQL, API design, Streamlit

**Certifications:**
- Coursera – Generative AI for Everyone (DeepLearning.AI)
- Coursera – Generative AI Deep Research: Strategic AI Edge for Leaders

**Design Requirements:**
- Dark theme with blue/cyan accent colors
- Smooth scroll animations and hover effects
- Sticky navigation bar with smooth scrolling
- Hero section with profile photo placeholder (id="profile-photo")
- Sections: Home, About, Skills, Projects, Experience, Contact
- Skills displayed as animated progress bars or tags
- Project cards with tech stack badges
- Responsive design for mobile and desktop
- Particle or gradient animated background in hero section
- Social media links (GitHub, LinkedIn) in header and footer
- Contact form at the bottom
- Modern fonts from Google Fonts
- Professional and impressive overall look

4. but in very first step copilot gives me random responces even after my prompt 
5. for actual output i give it again strict prompt 
6. after it gives the code in files 
7. i run the code and check where it makes mistakes but it gives good output as i want 
8. BIGGEST LEARNING : if we want to change something that we don't want we gives little prompts like change this section to this 
9. also we can change MANUALLY 
10. **** if we want to changes things manually it gives better understanding, 

so my opinions is like first undersatnd what do you exactly want from ai 
- think about it 
- decide your goal 
- take visualization / structure from ai and 
- modify it your own for better understanding 


ctrl + I----> for copilot chat open 

index.html mein karo jab:
Kisi ek specific element ka style change karna ho
Jaise sirf photo ki border, ya ek button ka color

styles.css mein karo jab:
Overall design improve karni ho
Fonts, colors, animations, spacing — sab kuch


# deploy your portfolio website free of coast at server / live.'
# 1. using netlify: 
process
1. open netlify
2. singnup 
3. there is lot of folders in your codebase makesure you upload only that folder  you want to deploy 
4. copy all files from folder ( inde.html , styles.css, image.jpg)
5. just drag and drop  on netlify 
6. it gives you link 
7. share the link anyone can easily check your website 

# 2. **Method 2 — GitHub Pages 
process
1. open github 
2. create new repo (portfoliolive_viagithub)
3. choose add files then upload files in repo 
4. here we just copy and paste files from our folder that what we want (no need to git commands direct copy paste )
5. GitHub Pages open kiya (Settings → Pages)
6. choose Build and deployment (Static HTML click on  (By GitHub Actions))
7. workflow generate
8. Repo → Actions (Deploy static content to Pages)
9. deployment start after 1-2 minutes 
10. github gives you the live link share and use from anywhere 


