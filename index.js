document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hidden-sections-data-scientist").style.display = "block";
    document.getElementById("hidden-sections-full-stack").style.display = "none";
    document.getElementById("hidden-sections-devops").style.display = "none";
    document.getElementById("hidden-sections-other-skills").style.display = "none";

    const data_scientist = document.getElementById("data-scientist");
    data_scientist.addEventListener("click", function () {
        if (document.getElementById("hidden-sections-data-scientist").style.display == "block") {
            document.getElementById("hidden-sections-data-scientist").style.display = "none";
            document.getElementById("first-row-left-text-ul-topic-indicator-data-scientist").innerHTML = ' <i class="fas fa-chevron-right"></i> ';
        } else {
            document.getElementById("hidden-sections-data-scientist").style.display = "block";
            document.getElementById("first-row-left-text-ul-topic-indicator-data-scientist").innerHTML = ' <i class="fas fa-chevron-down"></i> ';

        }
    });

    
    const full_stack = document.getElementById("full-stack");
    full_stack.addEventListener("click", function () {
        if (document.getElementById("hidden-sections-full-stack").style.display == "none") {
            document.getElementById("hidden-sections-full-stack").style.display = "block";
            document.getElementById("first-row-left-text-ul-topic-indicator-full-stack").innerHTML = ' <i class="fas fa-chevron-down"></i> ';
        } else {
            document.getElementById("hidden-sections-full-stack").style.display = "none";
            document.getElementById("first-row-left-text-ul-topic-indicator-full-stack").innerHTML = ' <i class="fas fa-chevron-right"></i> ';

        }
    });

    const devops = document.getElementById("devops");
    devops.addEventListener("click", function () {
        if (document.getElementById("hidden-sections-devops").style.display == "none") {
            document.getElementById("hidden-sections-devops").style.display = "block";
            document.getElementById("first-row-left-text-ul-topic-indicator-devops").innerHTML = ' <i class="fas fa-chevron-down"></i> ';
        } else {
            document.getElementById("hidden-sections-devops").style.display = "none";
            document.getElementById("first-row-left-text-ul-topic-indicator-devops").innerHTML = ' <i class="fas fa-chevron-right"></i> ';
        }
    });

    const other_skills = document.getElementById("other-skills");
    other_skills.addEventListener("click", function () {
        if (document.getElementById("hidden-sections-other-skills").style.display == "none") {
            document.getElementById("hidden-sections-other-skills").style.display = "block";
            document.getElementById("first-row-left-text-ul-topic-indicator-other-skills").innerHTML = ' <i class="fas fa-chevron-down"></i> ';
        } else {
            document.getElementById("hidden-sections-other-skills").style.display = "none";
            document.getElementById("first-row-left-text-ul-topic-indicator-other-skills").innerHTML = ' <i class="fas fa-chevron-right"></i> ';
        }
    });

  });