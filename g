[33mcommit ae9ab661be2c2f87115c75e5b8727504ed0ff8f7[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Sat Nov 23 15:08:04 2019 +0200

    Updated package.json

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit 170fb2d6baade4aa13f882041c3db22fed44b2bb[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Sat Nov 23 15:06:45 2019 +0200

    Commented SearchBuilder class

 src/search-builder.js | 36 [32m++++++++++++++++++++++++++++++++++++[m
 1 file changed, 36 insertions(+)

[33mcommit 8b565a294bfd1afd4635b05a5484edbcb113ef31[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Wed Nov 6 09:00:05 2019 +0200

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit c3e20cde83247307ba0d76cd7a74c75a03cdf08f[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Wed Nov 6 08:59:47 2019 +0200

    Implemented notIRegexp operator

 README.md                             |  1 [32m+[m
 src/where-builder.js                  |  2 [32m+[m[31m-[m
 test/data/where-builder/notIRegexp.js | 26 [32m++++++++++++++++++++++++++[m
 test/index.js                         |  6 [32m+++++[m[31m-[m
 4 files changed, 33 insertions(+), 2 deletions(-)

[33mcommit 2bbc51a3905597dcd971d6a0e9aa3b145b35e333[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Mon Nov 4 15:32:56 2019 +0200

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit b26c8a5e3309767653bb6c9af2b863888ad621ba[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Mon Nov 4 15:32:40 2019 +0200

    Implemented iRegexp operator

 README.md                          |  1 [32m+[m
 src/where-builder.js               |  2 [32m+[m[31m-[m
 test/data/where-builder/iRegexp.js | 17 [32m+++++++++++++++++[m
 test/index.js                      |  4 [32m++++[m
 4 files changed, 23 insertions(+), 1 deletion(-)

[33mcommit caf788429e9a70223e59d8f7f4661f0384db61b4[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Sat Nov 2 20:43:33 2019 +0200

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit bd199039f3c18a059b84ce2aaab03d50e94b5816[m
Author: Sergey Mukhin <sergeymukhin21@gmail.com>
Date:   Sat Nov 2 20:43:18 2019 +0200

    Implemented notRegexp operator

 README.md                            |  1 [32m+[m
 src/where-builder.js                 |  2 [32m+[m[31m-[m
 test/data/where-builder/notRegexp.js | 17 [32m+++++++++++++++++[m
 test/data/where-builder/regexp.js    |  2 [32m+[m[31m-[m
 test/index.js                        |  4 [32m++++[m
 5 files changed, 24 insertions(+), 2 deletions(-)

[33mcommit dc5c2b00944cffbc8cb3626f4188effec181b62f[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Thu Oct 31 17:19:56 2019 +0000

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit 9112a5ce585cf46222fa4c0384b8468cf32f82f8[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Thu Oct 31 17:19:24 2019 +0000

    Implemented regexp operator

 README.md                         |  1 [32m+[m
 src/where-builder.js              |  2 [32m+[m[31m-[m
 test/data/where-builder/regexp.js | 17 [32m+++++++++++++++++[m
 test/index.js                     |  5 [32m+++++[m
 4 files changed, 24 insertions(+), 1 deletion(-)

[33mcommit c14e3db27b0168a897c65949d01e28fbcdd4996e[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 26 16:19:30 2019 +0000

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit de5a6116671b3e43e3064699caa5e3f3dd8c94fe[m
Merge: f4a42c1 813926e
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 26 16:19:01 2019 +0000

    Merge branch 'master' of https://github.com/segemun/sequelize-search-builder

[33mcommit f4a42c18b86be4900e347945da6b7bb064ac87e4[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 26 16:18:17 2019 +0000

    Refactoring: removed lodash.isempty function

 package.json          | 1 [31m-[m
 src/search-builder.js | 4 [32m++[m[31m--[m
 2 files changed, 2 insertions(+), 3 deletions(-)

[33mcommit fdd6be8454e631dde69fd3ee0ae608c4d9c6738e[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 26 16:09:31 2019 +0000

    Convert request to empty object if it is empty

 src/builder-abstract.js          | 2 [32m+[m[31m-[m
 test/data/where-builder/equal.js | 5 [32m+++++[m
 2 files changed, 6 insertions(+), 1 deletion(-)

[33mcommit 813926e0d7269ca56c5197b0d73447c2abf1b279[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Fri Oct 25 08:56:53 2019 +0300

    Updated pakcage version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit d5f0a8300f00d34bcbd1c2598792187e72950cf7[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Fri Oct 25 08:56:20 2019 +0300

    Refectoring: added getQueryByType method

 src/search-builder.js | 17 [32m++++++++++++[m[31m-----[m
 1 file changed, 12 insertions(+), 5 deletions(-)

[33mcommit 37d70e6d77bdda862930c3baca9e6651adef3e8d[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Thu Oct 24 11:45:58 2019 +0300

    Refactoring. Included lodash isempty/merge/isequal instead of full library

 package.json            | 6 [32m++++[m[31m--[m
 src/builder-abstract.js | 4 [32m++[m[31m--[m
 src/search-builder.js   | 4 [32m++[m[31m--[m
 test/index.js           | 8 [32m++++[m[31m----[m
 4 files changed, 12 insertions(+), 10 deletions(-)

[33mcommit 3d8c81b061d05232bdd4ee61f7a5742b89487a29[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Thu Oct 24 11:28:51 2019 +0300

    Update package version

 package.json          | 2 [32m+[m[31m-[m
 src/search-builder.js | 6 [32m++[m[31m----[m
 src/where-builder.js  | 6 [32m+++[m[31m---[m
 3 files changed, 6 insertions(+), 8 deletions(-)

[33mcommit ee62090c977832742027d92d837754b685a3d9c0[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Wed Oct 23 08:33:28 2019 +0300

    Update pakcage.json

 package.json | 11 [32m+++++++++[m[31m--[m
 1 file changed, 9 insertions(+), 2 deletions(-)

[33mcommit 1ee8fbf7557c542908eb1200bb93cd6cef232d37[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Wed Oct 23 08:33:12 2019 +0300

    Refactoring of where-builder, removed switch construction

 src/search-builder.js | 100 [32m++++++++++++++[m[31m---------------[m
 src/where-builder.js  | 175 [32m++++++++++++++++++++++[m[31m----------------------------[m
 2 files changed, 126 insertions(+), 149 deletions(-)

[33mcommit 11580349aaf36c988a2785a751ff8f8cce8b34a7[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Tue Oct 22 08:48:56 2019 +0300

    Updated package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit adb4a703e7fd0c960d13b50fa95f7f217128cac4[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Tue Oct 22 08:47:48 2019 +0300

    Igonre query prefix (?)

 .eslintrc.json                   | 3 [32m++[m[31m-[m
 src/builder-abstract.js          | 2 [32m+[m[31m-[m
 test/data/where-builder/equal.js | 7 [32m+++++++[m
 3 files changed, 10 insertions(+), 2 deletions(-)

[33mcommit 272a8a7c4f1874416dd5f6b2ee9ecbfe9444ee6e[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Mon Oct 21 09:03:17 2019 +0300

    Disabled logging by default

 README.md       | 4 [32m++[m[31m--[m
 config/index.js | 2 [32m+[m[31m-[m
 package.json    | 2 [32m+[m[31m-[m
 3 files changed, 4 insertions(+), 4 deletions(-)

[33mcommit 2f3d43e9f2b33a2dba134e3128824f84f84b89d6[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Sun Oct 20 21:14:26 2019 +0300

    Update package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit 9886cd4fcc7aa5b9a58fe06888140664151a4d73[m
Author: smukhin <sergeymukhin21@gmail.com>
Date:   Sun Oct 20 16:59:22 2019 +0300

    Gitignore .idea folder

 .gitignore | 3 [32m++[m[31m-[m
 1 file changed, 2 insertions(+), 1 deletion(-)

[33mcommit 8d8dcffef39091e7db1ca2aa3354ccebd3904ad3[m
Author: smukhin <smukhin@acutenet.com>
Date:   Sun Oct 20 16:46:56 2019 +0300

    Update package version

 package.json | 2 [32m+[m[31m-[m
 1 file changed, 1 insertion(+), 1 deletion(-)

[33mcommit 8ea714d1ac0d9a599c1be44b4032c68706c775b0[m
Author: smukhin <smukhin@acutenet.com>
Date:   Sun Oct 20 16:44:23 2019 +0300

    Git ignore package-lock.json

 .gitignore | 3 [32m++[m[31m-[m
 1 file changed, 2 insertions(+), 1 deletion(-)

[33mcommit f46ce622a1ed408fc0b939950eeb2bc7c3698711[m
Author: smukhin <smukhin@acutenet.com>
Date:   Sun Oct 20 16:42:32 2019 +0300

    Removed package-lock.json

 package-lock.json | 1798 [31m-----------------------------------------------------[m
 1 file changed, 1798 deletions(-)

[33mcommit 41d901b0a8717630da19cec3804397a924f8f24b[m
Author: smukhin <smukhin@acutenet.com>
Date:   Sun Oct 20 16:35:21 2019 +0300

    Added .vscode folder to .gitignore file

 .gitignore | 3 [32m++[m[31m-[m
 1 file changed, 2 insertions(+), 1 deletion(-)

[33mcommit 25fc92aaa09b3cd2f651aaa3e23205237f88aa53[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 19 18:57:53 2019 +0000

    Update package version

 package-lock.json | 2 [32m+[m[31m-[m
 package.json      | 2 [32m+[m[31m-[m
 2 files changed, 2 insertions(+), 2 deletions(-)

[33mcommit 89f805d5710479901c141b7397a37b3b65f79a4a[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Sat Oct 19 18:55:11 2019 +0000

    If _condition parameter is absent - "and" will be use by default

 README.md              |  39 [32m++++++++++++[m
 src/where-builder.js   |   4 [32m++[m
 test/data/condition.js | 161 [32m+++++++++++++++++++++++++++++++++++++++++++++++++[m
 test/index.js          |   5 [32m++[m
 4 files changed, 209 insertions(+)

[33mcommit 1cc81849bfb9873c3e20c7e0c253e3d7b29dc0a8[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Thu Oct 17 08:17:24 2019 +0000

    Update package version

 package-lock.json | 2 [32m+[m[31m-[m
 package.json      | 2 [32m+[m[31m-[m
 2 files changed, 2 insertions(+), 2 deletions(-)

[33mcommit 71caa083b1deb76b94f4fa0db659ccb5c2435d83[m
Author: Segemun <sergeymukhin21@gmail.com>
Date:   Thu Oct 17 08:17:08 2019 +0000

    Added iLike and notILike tests and readme description

 README.md                           | 30 [32m++++++++++++[m[31m-----------[m
 test/data/where-builder/iLike.js    | 49 [32m+++++++++++++++++++++++++++++++++++++[m
 test/data/where-builder/notILike.js | 49 [32m+++++++++++++++++++++++++++++++++++++[m
 test/index.js                       |  8 [32m++++++[m
 4 files changed, 122 insertions(+), 14 deletions(-)
