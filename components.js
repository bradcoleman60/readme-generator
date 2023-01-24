//Obtain the current year for the copyright notation 
var currentYear = new Date().getFullYear()

//Defines the MIT License as a template literal
var MIT = `MIT License

Copyright (c) ${currentYear} 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

//Defines the ISC License as a template literal
var ISC = `ISC License

Copyright (c) ${currentYear} 

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`;

//Defines the UnLicense as a template literal 
var Unlicense = `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`;


//Defines link to badges for respective licenses
var mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
var iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
var unBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`


var tableHeader = `| Technology Used | Resource URL | `;
var tablesyntax = `| ------------- |:-------------| `;
var html = `| <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)"> | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |`;
var git = `| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) |  `;
var css = `| <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"> | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |`;
var JavaScript = `| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |`;
var nodeJs = `| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |`;
var jQuery = `| <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> | [https://api.jquery.com/](https://api.jquery.com/) |`;


var contributionGuidelines = `
##Getting started

Check to see below for the types of contributions we accept before making changes. Some of them don't even require writing a single line of code.

Issues
Create a new issue
If you spot a problem with the docs, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using a relevant issue form.

Solve an issue
Scan through our existing issues to find one that interests you. You can narrow down the search using labels as filters. See Labels for more information. As a general rule, we do not assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

Make Changes
Make changes in the UI

Click Make a contribution at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the .md file where you can make your changes and create a pull request for a review.

Make changes locally
Fork the repository.

##Using GitHub Desktop:

Getting started with GitHub Desktop will guide you through setting up Desktop.
Once Desktop is set up, you can use it to fork the repo!

##Using the command line:

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
Install or update to Node.js v16. For more information, see the development guide.

Create a working branch and start with your changes!

#Commit your update
Commit the changes once you are happy with them. Don't forget to self-review to speed up the review process.

#Pull Request
When you're finished with the changes, create a pull request, also known as a PR.

Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.

Don't forget to link PR to issue if you are solving one.

Enable the checkbox to allow maintainer edits so the branch can be updated for a merge. Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.

We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as resolved.
If you run into any merge issues, checkout this git tutorial to help you resolve merge conflicts and other issues.
Your PR is merged!

Once your PR is merged, your contributions will be publicly visible on the GitHub docs.

`



//Exports the variables on this files in respective objects
module.exports = {
    license: {MIT: MIT, ISC: ISC, Unlicense: Unlicense},
    badges: {MIT: mitBadge, ISC: iscBadge, Unlicense: unBadge},
    contributionGuidelines
    }