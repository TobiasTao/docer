## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the app change log.

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type> <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a closing reference to an issue if any.

### Revert

If the commit reverts a previous commit, it should begin with revert: , followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>., where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

| Emoji                     | Code                          | Commit type                                   |
| ------------------------- | ----------------------------- | --------------------------------------------- |
| 🎨                        | `:art:`                       | Improving structure / format of the code.     |
| ⚡                        | `:zap:`                       | Improving performance.                        |
| :wastebasket:             | `:wastebasket:`               | Removing code or files.                       |
| 🐛                        | `:bug:`                       | Fixing a bug.                                 |
| 🚑                        | `:ambulance:`                 | Critical hotfix.                              |
| ✨                        | `:sparkles:`                  | Introducing new features.                     |
| 📝                        | `:pencil:`                    | Writing docs.                                 |
| 🚀                        | `:rocket:`                    | Deploying stuff.                              |
| 💄                        | `:lipstick:`                  | Updating the UI and style files.              |
| 🎉                        | `:tada:`                      | Initial commit.                               |
| ✅                        | `:white_check_mark:`          | Updating tests.                               |
| 🔒                        | `:lock:`                      | Fixing security issues.                       |
| 🍎                        | `:apple:`                     | Fixing something on macOS.                    |
| 🐧                        | `:penguin:`                   | Fixing something on Linux.                    |
| 🏁                        | `:checkered_flag:`            | Fixing something on Windows.                  |
| 🤖                        | `:robot:`                     | Fixing something on Android.                  |
| 🍏                        | `:green_apple:`               | Fixing something on iOS.                      |
| 🔖                        | `:bookmark:`                  | Releasing / Version tags.                     |
| 🚨                        | `:rotating_light:`            | Removing linter warnings.                     |
| 🚧                        | `:construction:`              | Work in progress.                             |
| 💚                        | `:green_heart:`               | Fixing CI Build.                              |
| ⬇️                        | `:arrow_down:`                | Downgrading dependencies.                     |
| ⬆️                        | `:arrow_up:`                  | Upgrading dependencies.                       |
| 📌                        | `:pushpin:`                   | Pinning dependencies to specific versions.    |
| 👷                        | `:construction_worker:`       | Adding CI build system.                       |
| 📈                        | `:chart_with_upwards_trend:`  | Adding analytics or tracking code.            |
| ♻️                        | `:recycle:`                   | Refactoring code.                             |
| 🐳                        | `:whale:`                     | Work about Docker.                            |
| ➕                        | `:heavy_plus_sign:`           | Adding a dependency.                          |
| ➖                        | `:heavy_minus_sign:`          | Removing a dependency.                        |
| 🔧                        | `:wrench:`                    | Changing configuration files.                 |
| 🌐                        | `:globe_with_meridians:`      | Internationalization and localization.        |
| ✏️                        | `:pencil2:`                   | Fixing typos.                                 |
| 💩                        | `:poop:`                      | Writing bad code that needs to be improved.   |
| ⏪                        | `:rewind:`                    | Reverting changes.                            |
| 🔀                        | `:twisted_rightwards_arrows:` | Merging branches.                             |
| 📦                        | `:package:`                   | Updating compiled files or packages.          |
| 👽                        | `:alien:`                     | Updating code due to external API changes.    |
| 🚚                        | `:truck:`                     | Moving or renaming files.                     |
| 📄                        | `:page_facing_up:`            | Adding or updating license.                   |
| 💥                        | `:boom:`                      | Introducing breaking changes.                 |
| 🍱                        | `:bento:`                     | Adding or updating assets.                    |
| 👌                        | `:ok_hand:`                   | Updating code due to code review changes.     |
| ♿                        | `:wheelchair:`                | Improving accessibility.                      |
| 💡                        | `:bulb:`                      | Documenting source code.                      |
| 🍻                        | `:beers:`                     | Writing code drunkenly.                       |
| 💬                        | `:speech_balloon:`            | Updating text and literals.                   |
| 🗃️                        | `:card_file_box:`             | Performing database related changes.          |
| 🔊                        | `:loud_sound:`                | Adding logs.                                  |
| 🔇                        | `:mute:`                      | Removing logs.                                |
| 👥                        | `:busts_in_silhouette:`       | Adding contributor(s).                        |
| 🚸                        | `:children_crossing:`         | Improving user experience / usability.        |
| 🏗️                        | `:building_construction:`     | Making architectural changes.                 |
| 📱                        | `:iphone:`                    | Working on responsive design.                 |
| 🤡                        | `:clown_face:`                | Mocking things.                               |
| 🥚                        | `:egg:`                       | Adding an easter egg.                         |
| 🙈                        | `:see_no_evil:`               | Adding or updating a .gitignore file          |
| 📸                        | `:camera_flash:`              | Adding or updating snapshots                  |
| ⚗️                        | `:alembic:`                   | Experimenting new things                      |
| 🔍                        | `:mag:`                       | Improving SEO                                 |
| ☸️                        | `:wheel_of_dharma:`           | Work about Kubernetes                         |
| 🏷️                        | `:label:`                     | Adding or updating types (Flow, TypeScript)   |
| :seedling:                | `:seeding:`                   | Adding or updating seed files                 |
| :triangular_flag_on_post: | `:triangular_flag_on_post:`   | Adding, updating, or removing feature flags   |
| :goal_net:                | `:goal_net:`                  | Catching errors                               |
| :dizzy:                   | `:dizzy:`                     | Adding or updating animations and transitions |
| :hammer_and_wrench:       | `:hammer_and_wrench:`         | Adding or updating build system files         |

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- capitalize the first letter
- no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.
