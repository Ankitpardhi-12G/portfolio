/* ============================================================
   ANKIT PARDHI PORTFOLIO
   FULL INTERACTIVE SCRIPT

   FEATURES
   ------------------------------------------------------------
   1. Add Project
   2. Edit Project
   3. Delete Project
   4. Project Details Modal
   5. Project Image
   6. Project Features
   7. Project Website
   8. Project GitHub
   9. Add Skill
   10. Edit Skill
   11. Delete Skill
   12. LinkedIn
   13. GitHub
   14. Instagram
   15. Email
   16. Other Website
   17. LocalStorage
   18. Loader
   19. Typing Animation
   20. Scroll Animation
============================================================ */


/* ============================================================
   1. STORAGE KEYS
============================================================ */

const STORAGE = {

    skills: "ankit_portfolio_skills",

    projects: "ankit_portfolio_projects",

    social: "ankit_portfolio_social"

};


/* ============================================================
   2. DEFAULT SOCIAL DATA
============================================================ */

const DEFAULT_SOCIAL = {

    email: "yourmail@example.com",

    linkedin: "https://www.linkedin.com/",

    github: "https://github.com/",

    instagram: "https://www.instagram.com/",

    other: ""

};


/* ============================================================
   3. ID GENERATOR
============================================================ */

function createId() {

    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {

        return crypto.randomUUID();

    }

    return (
        Date.now().toString(36) +
        Math.random().toString(36).substring(2)
    );

}


/* ============================================================
   4. DEFAULT SKILLS
============================================================ */

const DEFAULT_SKILLS = [

    {
        id: createId(),

        name: "HTML",

        icon: "🌐",

        description:
            "Semantic and modern web structure."
    },


    {
        id: createId(),

        name: "CSS",

        icon: "🎨",

        description:
            "Responsive layouts, animations and modern UI design."
    },


    {
        id: createId(),

        name: "JavaScript",

        icon: "⚡",

        description:
            "Interactive and dynamic web applications."
    },


    {
        id: createId(),

        name: "React",

        icon: "⚛️",

        description:
            "Modern component-based frontend development."
    },


    {
        id: createId(),

        name: "Node.js",

        icon: "🟢",

        description:
            "Backend development and REST APIs."
    },


    {
        id: createId(),

        name: "Database",

        icon: "🗄️",

        description:
            "Database design, queries and application data management."
    }

];


/* ============================================================
   5. DEFAULT PROJECTS
============================================================ */

const DEFAULT_PROJECTS = [

    {

        id: createId(),

        name:
            "Gym Management System",

        description:
            "A complete gym management platform designed to manage members, trainers, plans, payments and daily gym operations.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Backend",
            "Database"
        ],

        features: [
            "Member management",
            "Trainer management",
            "Membership plans",
            "Payment management",
            "Admin dashboard"
        ],

        role:
            "Full Stack Developer",

        duration:
            "2 Months",

        image:
            "",

        live:
            "",

        github:
            ""

    },


    {

        id: createId(),

        name:
            "Animated Portfolio",

        description:
            "A futuristic personal portfolio website with animated sections, project management and an integrated no-code editor.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Animated hero section",
            "Project management",
            "Skill management",
            "Social media integration",
            "LocalStorage CMS"
        ],

        role:
            "Full Stack Developer",

        duration:
            "1 Month",

        image:
            "",

        live:
            "",

        github:
            ""

    }

];


/* ============================================================
   6. LOAD DATA
============================================================ */

function loadData(
    key,
    fallback
) {

    try {

        const saved =
            localStorage.getItem(key);


        if (!saved) {

            return fallback;

        }


        const parsed =
            JSON.parse(saved);


        return parsed;

    }

    catch (error) {

        console.error(
            "Error loading data:",
            error
        );


        return fallback;

    }

}


/* ============================================================
   7. APPLICATION DATA
============================================================ */

let skills =
    loadData(
        STORAGE.skills,
        DEFAULT_SKILLS
    );


let projects =
    loadData(
        STORAGE.projects,
        DEFAULT_PROJECTS
    );


let social =
    loadData(
        STORAGE.social,
        DEFAULT_SOCIAL
    );


/* ============================================================
   8. SAVE ALL DATA
============================================================ */

function saveAllData() {

    try {

        localStorage.setItem(
            STORAGE.skills,
            JSON.stringify(skills)
        );


        localStorage.setItem(
            STORAGE.projects,
            JSON.stringify(projects)
        );


        localStorage.setItem(
            STORAGE.social,
            JSON.stringify(social)
        );


        return true;

    }

    catch (error) {

        console.error(
            "Save error:",
            error
        );


        showNotification(
            "Data save nahi ho paya!",
            "error"
        );


        return false;

    }

}


/* ============================================================
   9. DOM ELEMENTS
============================================================ */


/* ---------- Loader ---------- */

const loader =
    document.getElementById(
        "loader"
    );


/* ---------- Editor ---------- */

const openEditorBtn =
    document.getElementById(
        "openEditorBtn"
    );


const editorModal =
    document.getElementById(
        "editorModal"
    );


const closeEditorBtn =
    document.getElementById(
        "closeEditorBtn"
    );


const savePortfolioBtn =
    document.getElementById(
        "savePortfolioBtn"
    );


/* ---------- Main Containers ---------- */

const skillsContainer =
    document.getElementById(
        "skillsContainer"
    );


const projectsContainer =
    document.getElementById(
        "projectsContainer"
    );


/* ---------- Editor Lists ---------- */

const editorSkillsList =
    document.getElementById(
        "editorSkillsList"
    );


const editorProjectsList =
    document.getElementById(
        "editorProjectsList"
    );


/* ---------- Add Buttons ---------- */

const addSkillBtn =
    document.getElementById(
        "addSkillBtn"
    );


const addProjectBtn =
    document.getElementById(
        "addProjectBtn"
    );


const editorAddSkillBtn =
    document.getElementById(
        "editorAddSkillBtn"
    );


const editorAddProjectBtn =
    document.getElementById(
        "editorAddProjectBtn"
    );


/* ============================================================
   10. SOCIAL DOM ELEMENTS
============================================================ */

const socialEmail =
    document.getElementById(
        "socialEmail"
    );


const socialLinkedin =
    document.getElementById(
        "socialLinkedin"
    );


const socialGithub =
    document.getElementById(
        "socialGithub"
    );


const socialInstagram =
    document.getElementById(
        "socialInstagram"
    );


const socialOther =
    document.getElementById(
        "socialOther"
    );


/* ---------- Hero Social ---------- */

const heroGithub =
    document.getElementById(
        "heroGithub"
    );


const heroLinkedin =
    document.getElementById(
        "heroLinkedin"
    );


const heroInstagram =
    document.getElementById(
        "heroInstagram"
    );


const heroEmail =
    document.getElementById(
        "heroEmail"
    );


/* ---------- Contact Social ---------- */

const contactGithub =
    document.getElementById(
        "contactGithub"
    );


const contactLinkedin =
    document.getElementById(
        "contactLinkedin"
    );


const contactInstagram =
    document.getElementById(
        "contactInstagram"
    );


const contactEmail =
    document.getElementById(
        "contactEmail"
    );


const contactEmailButton =
    document.getElementById(
        "contactEmailButton"
    );


/* ============================================================
   11. PROJECT FORM DOM
============================================================ */

const formModal =
    document.getElementById(
        "formModal"
    );


const closeFormBtn =
    document.getElementById(
        "closeFormBtn"
    );


const formTitle =
    document.getElementById(
        "formTitle"
    );


const projectForm =
    document.getElementById(
        "projectForm"
    );


const projectId =
    document.getElementById(
        "projectId"
    );


const projectName =
    document.getElementById(
        "projectName"
    );


const projectDescription =
    document.getElementById(
        "projectDescription"
    );


const projectTags =
    document.getElementById(
        "projectTags"
    );


const projectFeatures =
    document.getElementById(
        "projectFeatures"
    );


const projectRole =
    document.getElementById(
        "projectRole"
    );


const projectDuration =
    document.getElementById(
        "projectDuration"
    );


const projectImage =
    document.getElementById(
        "projectImage"
    );


const projectLive =
    document.getElementById(
        "projectLive"
    );


const projectGithub =
    document.getElementById(
        "projectGithub"
    );


/* ============================================================
   12. SKILL FORM DOM
============================================================ */

const skillForm =
    document.getElementById(
        "skillForm"
    );


const skillId =
    document.getElementById(
        "skillId"
    );


const skillName =
    document.getElementById(
        "skillName"
    );


const skillIcon =
    document.getElementById(
        "skillIcon"
    );


const skillDescription =
    document.getElementById(
        "skillDescription"
    );


/* ============================================================
   13. PROJECT DETAIL MODAL DOM
============================================================ */

const projectDetailModal =
    document.getElementById(
        "projectDetailModal"
    );


const closeProjectDetailBtn =
    document.getElementById(
        "closeProjectDetailBtn"
    );


const projectDetailImage =
    document.getElementById(
        "projectDetailImage"
    );


const projectDetailNumber =
    document.getElementById(
        "projectDetailNumber"
    );


const projectDetailTitle =
    document.getElementById(
        "projectDetailTitle"
    );


const projectDetailDescription =
    document.getElementById(
        "projectDetailDescription"
    );


const projectDetailTags =
    document.getElementById(
        "projectDetailTags"
    );


const projectDetailFeatures =
    document.getElementById(
        "projectDetailFeatures"
    );


const projectDetailRole =
    document.getElementById(
        "projectDetailRole"
    );


const projectDetailDuration =
    document.getElementById(
        "projectDetailDuration"
    );


const projectDetailLive =
    document.getElementById(
        "projectDetailLive"
    );


const projectDetailGithub =
    document.getElementById(
        "projectDetailGithub"
    );


/* ============================================================
   14. ESCAPE HTML
============================================================ */

function escapeHTML(value) {

    return String(
        value ?? ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* ============================================================
   15. SAFE URL
============================================================ */

function safeURL(value) {

    if (!value) {

        return "";

    }


    try {

        const url =
            new URL(value);


        if (
            url.protocol === "http:" ||
            url.protocol === "https:"
        ) {

            return url.href;

        }


        return "";

    }

    catch {

        return "";

    }

}


/* ============================================================
   16. LOADER
============================================================ */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                if (loader) {

                    loader.classList.add(
                        "hide"
                    );

                }

            },
            1200
        );

    }
);


/* ============================================================
   17. RENDER SKILLS
============================================================ */

function renderSkills() {

    if (!skillsContainer) {

        return;

    }


    skillsContainer.innerHTML = "";


    if (skills.length === 0) {

        skillsContainer.innerHTML = `

            <div class="glass-card empty-state">

                <h3>
                    No Skills Added
                </h3>

                <p>
                    Add your first skill from the editor.
                </p>

            </div>

        `;

        return;

    }


    skills.forEach(
        skill => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "skill-card glass-card reveal";


            card.innerHTML = `

                <div class="skill-icon">
                    ${escapeHTML(
                        skill.icon
                    )}
                </div>

                <h3>
                    ${escapeHTML(
                        skill.name
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        skill.description
                    )}
                </p>

            `;


            skillsContainer.appendChild(
                card
            );

        }
    );


    observeRevealElements();

}


/* ============================================================
   18. RENDER PROJECTS
============================================================ */

function renderProjects() {

    if (!projectsContainer) {

        return;

    }


    projectsContainer.innerHTML = "";


    if (projects.length === 0) {

        projectsContainer.innerHTML = `

            <div class="glass-card empty-state">

                <h3>
                    No Projects Added
                </h3>

                <p>
                    Add your first project from the editor.
                </p>

            </div>

        `;

        return;

    }


    projects.forEach(
        (project, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "project-card glass-card reveal";


            card.dataset.projectId =
                project.id;


            const tags =
                Array.isArray(
                    project.tags
                )
                    ? project.tags
                    : [];


            const tagHTML =
                tags
                    .map(
                        tag => `
                            <span class="project-tag">
                                ${escapeHTML(tag)}
                            </span>
                        `
                    )
                    .join("");


            const image =
                safeURL(
                    project.image
                );


            if (image) {

                card.style.backgroundImage =
                    `
                    linear-gradient(
                        rgba(5,5,9,0.82),
                        rgba(5,5,9,0.96)
                    ),
                    url("${image}")
                    `;

                card.style.backgroundSize =
                    "cover";

                card.style.backgroundPosition =
                    "center";

            }


            card.innerHTML = `

                <div class="project-number">

                    PROJECT
                    ${String(
                        index + 1
                    ).padStart(2, "0")}

                </div>


                <h3>
                    ${escapeHTML(
                        project.name
                    )}
                </h3>


                <p>
                    ${escapeHTML(
                        project.description
                    )}
                </p>


                <div class="project-tags">

                    ${tagHTML}

                </div>


                <div class="project-click-hint">

                    Click to explore →

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openProjectDetails(
                        project.id
                    );

                }
            );


            projectsContainer.appendChild(
                card
            );

        }
    );


    observeRevealElements();

    initializeProjectTilt();

}


/* ============================================================
   19. OPEN PROJECT DETAILS
============================================================ */

function openProjectDetails(id) {

    const project =
        projects.find(
            item =>
                item.id === id
        );


    if (!project) {

        return;

    }


    /* ---------- Number ---------- */

    const index =
        projects.findIndex(
            item =>
                item.id === id
        );


    projectDetailNumber.textContent =
        `PROJECT ${String(
            index + 1
        ).padStart(2, "0")}`;


    /* ---------- Title ---------- */

    projectDetailTitle.textContent =
        project.name;


    /* ---------- Description ---------- */

    projectDetailDescription.textContent =
        project.description;


    /* ---------- Image ---------- */

    const image =
        safeURL(
            project.image
        );


    if (image) {

        projectDetailImage.style.backgroundImage =
            `
            linear-gradient(
                rgba(5,5,9,0.25),
                rgba(5,5,9,0.45)
            ),
            url("${image}")
            `;

        projectDetailImage.style.backgroundSize =
            "cover";

        projectDetailImage.style.backgroundPosition =
            "center";

        projectDetailImage.classList.add(
            "has-image"
        );

    }

    else {

        projectDetailImage.style.backgroundImage =
            `
            radial-gradient(
                circle at center,
                rgba(124,60,255,0.3),
                rgba(5,5,9,0.9)
            )
            `;

        projectDetailImage.classList.remove(
            "has-image"
        );

    }


    /* ---------- Tags ---------- */

    const tags =
        Array.isArray(
            project.tags
        )
            ? project.tags
            : [];


    projectDetailTags.innerHTML =
        tags
            .map(
                tag => `

                    <span class="project-tag">

                        ${escapeHTML(tag)}

                    </span>

                `
            )
            .join("");


    /* ---------- Features ---------- */

    const features =
        Array.isArray(
            project.features
        )
            ? project.features
            : [];


    if (features.length === 0) {

        projectDetailFeatures.innerHTML =
            `
                <li>
                    Project features will be added soon.
                </li>
            `;

    }

    else {

        projectDetailFeatures.innerHTML =
            features
                .map(
                    feature => `

                        <li>
                            ${escapeHTML(
                                feature
                            )}
                        </li>

                    `
                )
                .join("");

    }


    /* ---------- Role ---------- */

    projectDetailRole.textContent =
        project.role ||
        "Developer";


    /* ---------- Duration ---------- */

    projectDetailDuration.textContent =
        project.duration ||
        "Not specified";


    /* ---------- Live Website ---------- */

    const live =
        safeURL(
            project.live
        );


    if (live) {

        projectDetailLive.href =
            live;

        projectDetailLive.style.display =
            "inline-flex";

    }

    else {

        projectDetailLive.removeAttribute(
            "href"
        );

        projectDetailLive.style.display =
            "none";

    }


    /* ---------- GitHub ---------- */

    const github =
        safeURL(
            project.github
        );


    if (github) {

        projectDetailGithub.href =
            github;

        projectDetailGithub.style.display =
            "inline-flex";

    }

    else {

        projectDetailGithub.removeAttribute(
            "href"
        );

        projectDetailGithub.style.display =
            "none";

    }


    /* ---------- Open ---------- */

    projectDetailModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* ============================================================
   20. CLOSE PROJECT DETAILS
============================================================ */

function closeProjectDetails() {

    if (!projectDetailModal) {

        return;

    }


    projectDetailModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ============================================================
   21. RENDER EDITOR SKILLS
============================================================ */

function renderEditorSkills() {

    if (!editorSkillsList) {

        return;

    }


    editorSkillsList.innerHTML = "";


    if (skills.length === 0) {

        editorSkillsList.innerHTML = `

            <div class="editor-empty">

                No skills added yet.

            </div>

        `;

        return;

    }


    skills.forEach(
        skill => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "editor-item";


            item.innerHTML = `

                <div class="editor-item-info">

                    <strong>

                        ${escapeHTML(
                            skill.icon
                        )}

                        ${escapeHTML(
                            skill.name
                        )}

                    </strong>


                    <small>

                        ${escapeHTML(
                            skill.description
                        )}

                    </small>

                </div>


                <div class="editor-actions">

                    <button
                        type="button"
                        class="edit-action"
                        data-action="edit-skill"
                        data-id="${skill.id}"
                    >
                        ✏️
                    </button>


                    <button
                        type="button"
                        class="delete-action"
                        data-action="delete-skill"
                        data-id="${skill.id}"
                    >
                        🗑️
                    </button>

                </div>

            `;


            editorSkillsList.appendChild(
                item
            );

        }
    );

}


/* ============================================================
   22. RENDER EDITOR PROJECTS
============================================================ */

function renderEditorProjects() {

    if (!editorProjectsList) {

        return;

    }


    editorProjectsList.innerHTML = "";


    if (projects.length === 0) {

        editorProjectsList.innerHTML = `

            <div class="editor-empty">

                No projects added yet.

            </div>

        `;

        return;

    }


    projects.forEach(
        project => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "editor-item";


            item.innerHTML = `

                <div class="editor-item-info">

                    <strong>

                        ${escapeHTML(
                            project.name
                        )}

                    </strong>


                    <small>

                        ${escapeHTML(
                            project.description
                        )}

                    </small>

                </div>


                <div class="editor-actions">

                    <button
                        type="button"
                        class="edit-action"
                        data-action="edit-project"
                        data-id="${project.id}"
                    >
                        ✏️
                    </button>


                    <button
                        type="button"
                        class="delete-action"
                        data-action="delete-project"
                        data-id="${project.id}"
                    >
                        🗑️
                    </button>

                </div>

            `;


            editorProjectsList.appendChild(
                item
            );

        }
    );

}


/* ============================================================
   23. LOAD SOCIAL DATA INTO EDITOR
============================================================ */

function loadSocialEditor() {

    if (socialEmail) {

        socialEmail.value =
            social.email || "";

    }


    if (socialLinkedin) {

        socialLinkedin.value =
            social.linkedin || "";

    }


    if (socialGithub) {

        socialGithub.value =
            social.github || "";

    }


    if (socialInstagram) {

        socialInstagram.value =
            social.instagram || "";

    }


    if (socialOther) {

        socialOther.value =
            social.other || "";

    }

}


/* ============================================================
   24. UPDATE SOCIAL LINKS ON WEBSITE
============================================================ */

function updateSocialLinks() {

    const email =
        social.email || "";


    const linkedin =
        safeURL(
            social.linkedin
        );


    const github =
        safeURL(
            social.github
        );


    const instagram =
        safeURL(
            social.instagram
        );


    /* ---------- Hero ---------- */

    if (heroGithub) {

        heroGithub.href =
            github || "#";

    }


    if (heroLinkedin) {

        heroLinkedin.href =
            linkedin || "#";

    }


    if (heroInstagram) {

        heroInstagram.href =
            instagram || "#";

    }


    if (heroEmail) {

        heroEmail.href =
            email
                ? `mailto:${email}`
                : "#";

    }


    /* ---------- Contact ---------- */

    if (contactGithub) {

        contactGithub.href =
            github || "#";

    }


    if (contactLinkedin) {

        contactLinkedin.href =
            linkedin || "#";

    }


    if (contactInstagram) {

        contactInstagram.href =
            instagram || "#";

    }


    if (contactEmail) {

        contactEmail.href =
            email
                ? `mailto:${email}`
                : "#";

    }


    if (contactEmailButton) {

        contactEmailButton.href =
            email
                ? `mailto:${email}`
                : "#";

    }

}


/* ============================================================
   25. OPEN EDITOR
============================================================ */

function openEditor() {

    renderEditorSkills();

    renderEditorProjects();

    loadSocialEditor();


    editorModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* ============================================================
   26. CLOSE EDITOR
============================================================ */

function closeEditor() {

    editorModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ============================================================
   27. OPEN PROJECT FORM
============================================================ */

function openProjectForm(
    project = null
) {

    projectForm.classList.add(
        "active"
    );


    skillForm.classList.remove(
        "active"
    );


    formModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";


    /* ---------- Edit ---------- */

    if (project) {

        formTitle.textContent =
            "Edit Project";


        projectId.value =
            project.id;


        projectName.value =
            project.name || "";


        projectDescription.value =
            project.description || "";


        projectTags.value =
            Array.isArray(
                project.tags
            )
                ? project.tags.join(", ")
                : "";


        projectFeatures.value =
            Array.isArray(
                project.features
            )
                ? project.features.join("\n")
                : "";


        projectRole.value =
            project.role || "";


        projectDuration.value =
            project.duration || "";


        projectImage.value =
            project.image || "";


        projectLive.value =
            project.live || "";


        projectGithub.value =
            project.github || "";


        return;

    }


    /* ---------- Add ---------- */

    formTitle.textContent =
        "Add New Project";


    projectForm.reset();


    projectId.value =
        "";

}


/* ============================================================
   28. OPEN SKILL FORM
============================================================ */

function openSkillForm(
    skill = null
) {

    skillForm.classList.add(
        "active"
    );


    projectForm.classList.remove(
        "active"
    );


    formModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";


    /* ---------- Edit ---------- */

    if (skill) {

        formTitle.textContent =
            "Edit Skill";


        skillId.value =
            skill.id;


        skillName.value =
            skill.name || "";


        skillIcon.value =
            skill.icon || "";


        skillDescription.value =
            skill.description || "";


        return;

    }


    /* ---------- Add ---------- */

    formTitle.textContent =
        "Add New Skill";


    skillForm.reset();


    skillId.value =
        "";

}


/* ============================================================
   29. CLOSE FORM
============================================================ */

function closeForm() {

    formModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ============================================================
   30. PROJECT FORM SUBMIT
============================================================ */

projectForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            projectName.value.trim();


        const description =
            projectDescription.value.trim();


        if (!name) {

            showNotification(
                "Project name required!",
                "error"
            );

            projectName.focus();

            return;

        }


        if (!description) {

            showNotification(
                "Project description required!",
                "error"
            );

            projectDescription.focus();

            return;

        }


        /* ---------- Tags ---------- */

        const tags =
            projectTags.value
                .split(",")
                .map(
                    tag =>
                        tag.trim()
                )
                .filter(
                    Boolean
                );


        /* ---------- Features ---------- */

        const features =
            projectFeatures.value
                .split("\n")
                .map(
                    feature =>
                        feature.trim()
                )
                .filter(
                    Boolean
                );


        /* ---------- Project ---------- */

        const id =
            projectId.value ||
            createId();


        const projectData = {

            id: id,

            name: name,

            description: description,

            tags: tags,

            features: features,

            role:
                projectRole.value.trim() ||
                "Full Stack Developer",

            duration:
                projectDuration.value.trim(),

            image:
                projectImage.value.trim(),

            live:
                projectLive.value.trim(),

            github:
                projectGithub.value.trim()

        };


        /* ---------- Existing ---------- */

        const index =
            projects.findIndex(
                item =>
                    item.id === id
            );


        if (index !== -1) {

            projects[index] =
                projectData;


            showNotification(
                "Project updated successfully ✨"
            );

        }


        else {

            projects.push(
                projectData
            );


            showNotification(
                "New project added 🚀"
            );

        }


        saveAllData();

        renderProjects();

        renderEditorProjects();

        closeForm();

    }
);


/* ============================================================
   31. SKILL FORM SUBMIT
============================================================ */

skillForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            skillName.value.trim();


        const description =
            skillDescription.value.trim();


        if (!name) {

            showNotification(
                "Skill name required!",
                "error"
            );

            skillName.focus();

            return;

        }


        if (!description) {

            showNotification(
                "Skill description required!",
                "error"
            );

            skillDescription.focus();

            return;

        }


        const id =
            skillId.value ||
            createId();


        const skillData = {

            id: id,

            name: name,

            icon:
                skillIcon.value.trim() ||
                "⚡",

            description:
                description

        };


        const index =
            skills.findIndex(
                item =>
                    item.id === id
            );


        if (index !== -1) {

            skills[index] =
                skillData;


            showNotification(
                "Skill updated successfully ✨"
            );

        }


        else {

            skills.push(
                skillData
            );


            showNotification(
                "New skill added ⚡"
            );

        }


        saveAllData();

        renderSkills();

        renderEditorSkills();

        closeForm();

    }
);


/* ============================================================
   32. EDIT PROJECT
============================================================ */

function editProject(id) {

    const project =
        projects.find(
            item =>
                item.id === id
        );


    if (!project) {

        return;

    }


    openProjectForm(
        project
    );

}


/* ============================================================
   33. DELETE PROJECT
============================================================ */

function deleteProject(id) {

    const project =
        projects.find(
            item =>
                item.id === id
        );


    if (!project) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${project.name}"?`
        );


    if (!confirmed) {

        return;

    }


    projects =
        projects.filter(
            item =>
                item.id !== id
        );


    saveAllData();

    renderProjects();

    renderEditorProjects();


    showNotification(
        "Project deleted 🗑️"
    );

}


/* ============================================================
   34. EDIT SKILL
============================================================ */

function editSkill(id) {

    const skill =
        skills.find(
            item =>
                item.id === id
        );


    if (!skill) {

        return;

    }


    openSkillForm(
        skill
    );

}


/* ============================================================
   35. DELETE SKILL
============================================================ */

function deleteSkill(id) {

    const skill =
        skills.find(
            item =>
                item.id === id
        );


    if (!skill) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${skill.name}"?`
        );


    if (!confirmed) {

        return;

    }


    skills =
        skills.filter(
            item =>
                item.id !== id
        );


    saveAllData();

    renderSkills();

    renderEditorSkills();


    showNotification(
        "Skill deleted 🗑️"
    );

}


/* ============================================================
   36. SAVE SOCIAL INFORMATION
============================================================ */

function saveSocialInformation() {

    social = {

        email:
            socialEmail.value.trim(),

        linkedin:
            socialLinkedin.value.trim(),

        github:
            socialGithub.value.trim(),

        instagram:
            socialInstagram.value.trim(),

        other:
            socialOther.value.trim()

    };


    saveAllData();

    updateSocialLinks();

}


/* ============================================================
   37. EDITOR BUTTON EVENTS
============================================================ */

openEditorBtn.addEventListener(
    "click",
    openEditor
);


closeEditorBtn.addEventListener(
    "click",
    closeEditor
);


addProjectBtn.addEventListener(
    "click",
    () => {

        openProjectForm();

    }
);


editorAddProjectBtn.addEventListener(
    "click",
    () => {

        openProjectForm();

    }
);


addSkillBtn.addEventListener(
    "click",
    () => {

        openSkillForm();

    }
);


editorAddSkillBtn.addEventListener(
    "click",
    () => {

        openSkillForm();

    }
);


closeFormBtn.addEventListener(
    "click",
    closeForm
);


closeProjectDetailBtn.addEventListener(
    "click",
    closeProjectDetails
);


/* ============================================================
   38. SAVE ALL BUTTON
============================================================ */

savePortfolioBtn.addEventListener(
    "click",
    function () {

        saveSocialInformation();

        saveAllData();

        renderSkills();

        renderProjects();

        renderEditorSkills();

        renderEditorProjects();

        updateSocialLinks();

        closeEditor();


        showNotification(
            "Portfolio saved successfully 💾"
        );

    }
);


/* ============================================================
   39. EDITOR SKILL ACTIONS
============================================================ */

editorSkillsList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {

            return;

        }


        const action =
            button.dataset.action;


        const id =
            button.dataset.id;


        if (
            action ===
            "edit-skill"
        ) {

            editSkill(id);

        }


        if (
            action ===
            "delete-skill"
        ) {

            deleteSkill(id);

        }

    }
);


/* ============================================================
   40. EDITOR PROJECT ACTIONS
============================================================ */

editorProjectsList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {

            return;

        }


        const action =
            button.dataset.action;


        const id =
            button.dataset.id;


        if (
            action ===
            "edit-project"
        ) {

            editProject(id);

        }


        if (
            action ===
            "delete-project"
        ) {

            deleteProject(id);

        }

    }
);


/* ============================================================
   41. CLOSE MODAL OUTSIDE CLICK
============================================================ */

editorModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            editorModal
        ) {

            closeEditor();

        }

    }
);


formModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            formModal
        ) {

            closeForm();

        }

    }
);


projectDetailModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            projectDetailModal
        ) {

            closeProjectDetails();

        }

    }
);


/* ============================================================
   42. ESC KEY
============================================================ */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeEditor();

            closeForm();

            closeProjectDetails();

        }

    }
);


/* ============================================================
   43. SCROLL REVEAL
============================================================ */

let revealObserver;


function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        elements.length === 0
    ) {

        return;

    }


    if (revealObserver) {

        revealObserver.disconnect();

    }


    revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* ============================================================
   44. TYPING ANIMATION
============================================================ */

const typingElement =
    document.querySelector(
        ".typing-text"
    );


const typingWords = [

    "Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "AI & Data Science Student",

    "Creative Developer"

];


let typingWordIndex =
    0;


let typingCharacterIndex =
    0;


let isDeleting =
    false;


function typeWriter() {

    if (!typingElement) {

        return;

    }


    const currentWord =
        typingWords[
            typingWordIndex
        ];


    if (!isDeleting) {

        typingCharacterIndex++;


        typingElement.textContent =
            currentWord.substring(
                0,
                typingCharacterIndex
            );


        if (
            typingCharacterIndex >=
            currentWord.length
        ) {

            isDeleting =
                true;


            setTimeout(
                typeWriter,
                1400
            );


            return;

        }

    }

    else {

        typingCharacterIndex--;


        typingElement.textContent =
            currentWord.substring(
                0,
                typingCharacterIndex
            );


        if (
            typingCharacterIndex <=
            0
        ) {

            isDeleting =
                false;


            typingWordIndex =
                (
                    typingWordIndex + 1
                ) %
                typingWords.length;

        }

    }


    setTimeout(
        typeWriter,
        isDeleting
            ? 45
            : 85
    );

}


/* ============================================================
   45. PROJECT TILT
============================================================ */

function initializeProjectTilt() {

    const cards =
        document.querySelectorAll(
            ".project-card"
        );


    cards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateY =
                        (
                            x -
                            centerX
                        ) / 35;


                    const rotateX =
                        -(
                            y -
                            centerY
                        ) / 35;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-8px)
                        scale(1.01)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


/* ============================================================
   46. MOUSE GLOW
============================================================ */

function createMouseGlow() {

    const glow =
        document.createElement(
            "div"
        );


    glow.style.cssText = `

        position: fixed;

        width: 280px;

        height: 280px;

        border-radius: 50%;

        pointer-events: none;

        z-index: -1;

        background:
            radial-gradient(
                circle,
                rgba(
                    124,
                    60,
                    255,
                    0.12
                ),
                transparent 70%
            );

        transform:
            translate(
                -50%,
                -50%
            );

        left: -500px;

        top: -500px;

        transition:
            left 0.12s ease,
            top 0.12s ease;

    `;


    document.body.appendChild(
        glow
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            glow.style.left =
                event.clientX + "px";


            glow.style.top =
                event.clientY + "px";

        }
    );

}


/* ============================================================
   47. NOTIFICATION
============================================================ */

function showNotification(
    message,
    type = "success"
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.textContent =
        message;


    const background =
        type === "error"

            ? "linear-gradient(135deg,#ff245c,#ff1493)"

            : "linear-gradient(135deg,#7c3cff,#ff1493)";


    notification.style.cssText = `

        position: fixed;

        right: 25px;

        bottom: 25px;

        z-index: 99999;

        padding:
            14px 20px;

        border-radius:
            12px;

        color: white;

        font-size:
            13px;

        font-weight:
            600;

        background:
            ${background};

        box-shadow:
            0 15px 40px
            rgba(
                124,
                60,
                255,
                0.35
            );

        transform:
            translateY(25px);

        opacity:
            0;

        transition:
            0.3s ease;

    `;


    document.body.appendChild(
        notification
    );


    requestAnimationFrame(
        () => {

            notification.style.opacity =
                "1";


            notification.style.transform =
                "translateY(0)";

        }
    );


    setTimeout(
        () => {

            notification.style.opacity =
                "0";


            notification.style.transform =
                "translateY(25px)";


            setTimeout(
                () => {

                    notification.remove();

                },
                300
            );

        },
        2500
    );

}


/* ============================================================
   48. INITIALIZE
============================================================ */

function initializePortfolio() {

    renderSkills();

    renderProjects();

    renderEditorSkills();

    renderEditorProjects();

    loadSocialEditor();

    updateSocialLinks();

    observeRevealElements();

    initializeProjectTilt();

    createMouseGlow();

    typeWriter();


    console.log(
        "%c ANKIT PARDHI PORTFOLIO READY 🚀 ",
        `
        background:#7c3cff;
        color:white;
        padding:10px;
        font-size:15px;
        border-radius:5px;
        `
    );

}


/* ============================================================
   49. START APPLICATION
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);

