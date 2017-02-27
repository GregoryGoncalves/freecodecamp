ready(() => {
    display_text("introduction");
    menu_items = document.getElementById("menu");

    menu_items.addEventListener("click", (event) => {
        change_selected_menu(event);
    });

});

function change_selected_menu(event) {
    let selected_item = event.target;
    if (selected_item.classList[0] === undefined) {
        let previous_item = document.getElementsByClassName("is-active")[0];
        previous_item.classList.remove("is-active");
        selected_item.className = "is-active";
        display_text(selected_item.id);
    }
}

function display_text(id) {
    document.getElementById("main").innerHTML = chapters[id];
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

//The purpose of this page is just a proof of concept, so the data has little meaning
//and will not be managed/updated in the future. Using objects to maintain data like this would be hellish in real life.
//The purpose of this data is just simple visualization of the css/js code, nothing more. It could be a lorem ipsum easily.
const chapters = {
    "introduction": `<section class="content column is-6 is-offset-2">
            <h1>Introduction</h1>
            <p>Welcome to “The Rust Programming Language,” an introductory book about Rust. Rust is a programming language that’s focused on safety, speed, and concurrency. Its design lets you create programs that have the performance and control of a low-level
                language, but with the powerful abstractions of a high-level language. These properties make Rust suitable for programmers who have experience in languages like C and are looking for a safer alternative, as well as those from languages
                like Python who are looking for ways to write code that performs better without sacrificing expressiveness.</p>
            <p>Rust performs the majority of its safety checks and memory management decisions at compile time, so that your program's runtime performance isn't impacted. This makes it useful in a number of use cases that other languages aren’t good at:
                programs with predictable space and time requirements, embedding in other languages, and writing low-level code, like device drivers and operating systems. It's also great for web applications: it powers the Rust package registry site,
                <a href="https://crates.io/">crates.io</a>! We're excited to see what <em>you</em> create with Rust.</p>
            <p>This book is written for a reader who already knows how to program in at least one programming language. After reading this book, you should be comfortable writing Rust programs. We’ll be learning Rust through small, focused examples that
                build on each other to demonstrate how to use various features of Rust as well as how they work behind the scenes.</p>
                <h2>Contributing to the book</h2>
            <p>This book is open source. If you find an error, please don’t hesitate to file an issue or send a pull request <a href="https://github.com/rust-lang/book">on GitHub</a>.</p>

        </section>`,
    "installation": ` <section class="content column is-6 is-offset-2">
            <h2>Installation</h2>
            <p>The first step to using Rust is to install it. You’ll need an internet connection to run the commands in this chapter, as we’ll be downloading Rust from the internet.</p>
            <p>We’ll be showing off a number of commands using a terminal, and those lines all start with <code>$</code>. You don't need to type in the <code>$</code> character; they are there to indicate the start of each command. You’ll see many tutorials
                and examples around the web that follow this convention: <code>$</code> for commands run as a regular user, and <code>#</code> for commands you should be running as an administrator. Lines that don't start with <code>$</code> are typically
                showing the output of the previous command.</p>
            <h3>Installing on Linux or Mac</h3>
            <p>If you're on Linux or a Mac, all you need to do is open a terminal and type this:
            </p>
            <pre><code>$ curl https://sh.rustup.rs -sSf | sh
</code></pre>
            <p>This will download a script and start the installation. You may be prompted for your password. If it all goes well, you’ll see this appear:</p>
            <pre><code>Rust is installed now. Great!
</code></pre>
            <p>Of course, if you disapprove of the <code>curl | sh</code> pattern, you can download, inspect and run the script however you like.</p>
            <h3>Installing on Windows</h3>
            <p>On Windows, go to <a href="https://rustup.rs/">https://rustup.rs</a>
                <!-- ignore -->and follow the instructions to download rustup-init.exe. Run that and follow the rest of the instructions it gives you.</p>
            <p>The rest of the Windows-specific commands in the book will assume that you are using <code>cmd</code> as your shell. If you use a different shell, you may be able to run the same commands that Linux and Mac users do. If neither work, consult
                the documentation for the shell you are using.</p>
            <h3>Custom installations</h3>
            <p>If you have reasons for preferring not to use rustup.rs, please see <a href="https://www.rust-lang.org/install.html">the Rust
installation page</a> for other options.</p>
            <h3>Uninstalling</h3>
            <p>Uninstalling Rust is as easy as installing it. From your shell, run the uninstall script:</p>
            <pre><code>$ rustup self uninstall
</code></pre>
            <h3>Troubleshooting</h3>
            <p>If you've got Rust installed, you can open up a shell, and type this:</p>
            <pre><code>$ rustc --version
</code></pre>
            <p>You should see the version number, commit hash, and commit date in a format similar to this for the latest stable version at the time you install:</p>
            <pre><code>rustc x.y.z (abcabcabc yyyy-mm-dd)
</code></pre>
            <p>If you see this, Rust has been installed successfully! Congrats!
            </p>
            <p>If you don't and you're on Windows, check that Rust is in your <code>%PATH%</code> system variable.
            </p>
            <p>If it still isn't working, there are a number of places where you can get help. The easiest is <a href="irc://irc.mozilla.org/#rust">the #rust IRC channel on irc.mozilla.org</a>
                <!-- ignore -->, which you can access through <a href="http://chat.mibbit.com/?server=irc.mozilla.org&amp;channel=%23rust">Mibbit</a>. Go to that address, and you'll be chatting with other Rustaceans (a silly nickname we call ourselves) who can help
                you out. Other great resources include <a href="https://users.rust-lang.org/">the user’s forum</a> and
                <a href="http://stackoverflow.com/questions/tagged/rust">Stack Overflow</a>.</p>
            <h3>Local documentation</h3>
            <p>The installer also includes a copy of the documentation locally, so you can read it offline. Run <code>rustup doc</code> to open the local documentation in your browser.
            </p>
            <p>Any time there's a type or function provided by the standard library and you're not sure what it does, use the API documentation to find out!</p>

        </section>`,
    "helloworld": `<section class="content column is-6 is-offset-2">
            <h2>Hello, World!</h2>
            <p>Now that you have Rust installed, let’s write your first Rust program. It's traditional when learning a new language to write a little program to print the text “Hello, world!” to the screen, and in this section, we'll follow that tradition.
            </p>
            <blockquote>
                <p>Note: This book assumes basic familiarity with the command line. Rust itself makes no specific demands about your editing, tooling, or where your code lives, so if you prefer an IDE to the command line, feel free to use your favorite IDE.
                </p>
            </blockquote>
            <h3>Creating a Project Directory</h3>
            <p>First, make a directory to put your Rust code in. Rust doesn't care where your code lives, but for this book, we'd suggest making a <em>projects</em> directory in your home directory and keeping all your projects there. Open a terminal and
                enter the following commands to make a directory for this particular project:</p>
            <p>Linux and Mac:</p>
            <pre><code>$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
</code></pre>
            <p>Windows:</p>
            <pre><code>&gt; mkdir %USERPROFILE%\projects
&gt; cd %USERPROFILE%\projects
&gt; mkdir hello_world
&gt; cd hello_world
</code></pre>

            <h3>Writing and Running a Rust Program</h3>
            <p>Next, make a new source file and call it <em>main.rs</em>. Rust files always end with the <em>.rs</em> extension. If you’re using more than one word in your filename, use an underscore to separate them. For example, you'd use <em>hello_world.rs</em>                rather than <em>helloworld.rs</em>.</p>
            <p>Now open the <em>main.rs</em> file you just created, and type the following code:</p>
            <p><span>Filename: main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Save the file, and go back to your terminal window. On Linux or OSX, enter the following commands:</p>
            <pre><code>$ rustc main.rs
$ ./main
Hello, world!
</code></pre>
            <p>On Windows, run <code>.\main.exe</code> instead of <code>./main</code>. Regardless of your operating system, you should see the string <code>Hello, world!</code> print to the terminal. If you did, then congratulations! You've officially written
                a Rust program. That makes you a Rust programmer! Welcome.</p>
            <h3>Anatomy of a Rust Program</h3>
            <p>Now, let’s go over what just happened in your "Hello, world!" program in detail. Here's the first piece of the puzzle:</p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {

}
</code></pre>
            <p>These lines define a <em>function</em> in Rust. The <code>main</code> function is special: it's the first thing that is run for every executable Rust program. The first line says, “I’m declaring a function named <code>main</code> that has
                no parameters and returns nothing.” If there were parameters, their names would go inside the parentheses, <code>(</code> and <code>)</code>.</p>
            <p>Also note that the function body is wrapped in curly braces, <code>{</code> and <code>}</code>. Rust requires these around all function bodies. It's considered good style to put the opening curly brace on the same line as the function declaration,
                with one space in between.</p>
            <p>Inside the <code>main</code> function:</p>
            <pre><code>    <span>println!</span>(<span>"Hello, world!"</span>);
</code></pre>
            <p>This line does all of the work in this little program: it prints text to the screen. There are a number of details to notice here. The first is that Rust style is to indent with four spaces, not a tab.</p>
            <p>The second important part is <code>println!</code>. This is calling a Rust <em>macro</em>, which is how metaprogramming is done in Rust. If it were calling a function instead, it would look like this: <code>println</code> (without the <code>!</code>).
                We'll discuss Rust macros in more detail in Chapter 24, but for now you just need to know that when you see a <code>!</code> that means that you’re calling a macro instead of a normal function.
            </p>
            <p>Next is <code>"Hello, world!"</code> which is a <em>string</em>. We pass this string as an argument to <code>println!</code>, which prints the string to the screen. Easy enough!</p>
            <p>The line ends with a semicolon (<code>;</code>). The <code>;</code> indicates that this expression is over, and the next one is ready to begin. Most lines of Rust code end with a
                <code>;</code>.</p>
            <h3>Compiling and Running Are Separate Steps</h3>
            <p>In "Writing and Running a Rust Program", we showed you how to run a newly created program. We'll break that process down and examine each step now.</p>
            <p>Before running a Rust program, you have to compile it. You can use the Rust compiler by entering the <code>rustc</code> command and passing it the name of your source file, like this:</p>
            <pre><code>$ rustc main.rs
</code></pre>
            <p>If you come from a C or C++ background, you'll notice that this is similar to
                <code>gcc</code> or <code>clang</code>. After compiling successfully, Rust should output a binary executable, which you can see on Linux or OSX by entering the <code>ls</code> command in your shell as follows:</p>
            <pre><code>$ ls
main  main.rs
</code></pre>
            <p>On Windows, you'd enter:</p>
            <pre><code>&gt; dir /B %= the /B option says to only show the file names =%
main.exe
main.rs
</code></pre>
            <p>This shows we have two files: the source code, with the <em>.rs</em> extension, and the executable (<em>main.exe</em> on Windows, <em>main</em> everywhere else). All that's left to do from here is run the <em>main</em> or <em>main.exe</em>                file, like this:</p>
            <pre><code>$ ./main  # or .\main.exe on Windows
</code></pre>
            <p>If <em>main.rs</em> were your "Hello, world!" program, this would print <code>Hello, world!</code> to your terminal.</p>
            <p>If you come from a dynamic language like Ruby, Python, or JavaScript, you may not be used to compiling and running a program being separate steps. Rust is an
                <em>ahead-of-time compiled</em> language, which means that you can compile a program, give it to someone else, and they can run it even without having Rust installed. If you give someone a <code>.rb</code>, <code>.py</code>, or <code>.js</code>                file, on the other hand, they need to have a Ruby, Python, or JavaScript implementation installed (respectively), but you only need one command to both compile and run your program. Everything is a tradeoff in language design.</p>
            <p>Just compiling with <code>rustc</code> is fine for simple programs, but as your project grows, you'll want to be able to manage all of the options your project has and make it easy to share your code with other people and projects. Next, we'll
                introduce you to a tool called Cargo, which will help you write real-world Rust programs.
            </p>
            <h2>Hello, Cargo!</h2>
            <p>Cargo is Rust’s build system and package manager, and Rustaceans use Cargo to manage their Rust projects because it makes a lot of tasks easier. For example, Cargo takes care of building your code, downloading the libraries your code depends
                on, and building those libraries. We call libraries your code needs
                <em>dependencies</em>.</p>
            <p>The simplest Rust programs, like the one we've written so far, don’t have any dependencies, so right now, you'd only be using the part of Cargo that can take care of building your code. As you write more complex Rust programs, you’ll want
                to add dependencies, and if you start off using Cargo, that will be a lot easier to do.</p>
            <p>As the vast, vast majority of Rust projects use Cargo, we will assume that you’re using it for the rest of the book. Cargo comes installed with Rust itself, if you used the official installers as covered in the Installation chapter. If you
                installed Rust through some other means, you can check if you have Cargo installed by typing the following into your terminal:</p>
            <pre><code>$ cargo --version
</code></pre>
            <p>If you see a version number, great! If you see an error like <code>command not found</code>, then you should look at the documentation for your method of installation to determine how to install Cargo separately.</p>
            <h3>Creating a Project with Cargo</h3>
            <p>Let's create a new project using Cargo and look at how it differs from our project in <code>hello_world</code>. Go back to your projects directory (or wherever you decided to put your code):</p>
            <p>Linux and Mac:</p>
            <pre><code>$ cd ~/projects
</code></pre>
            <p>Windows:</p>
            <pre><code>&gt; cd %USERPROFILE%\projects
</code></pre>
            <p>And then on any operating system run:</p>
            <pre><code>$ cargo new hello_cargo --bin
$ cd hello_cargo
</code></pre>
            <p>We passed the <code>--bin</code> argument to <code>cargo new</code> because our goal is to make an executable application, as opposed to a library. Executables are binary executable files often called just <em>binaries</em>. We've given <code>hello_cargo</code>                as the name for our project, and Cargo creates its files in a directory of the same name that we can then go into.</p>
            <p>If we list the files in the <em>hello_cargo</em> directory, we can see that Cargo has generated two files and one directory for us: a <em>Cargo.toml</em> and a <em>src</em> directory with a <em>main.rs</em> file inside. It has also initialized
                a new git repository in the <em>hello_cargo</em> directory for us, along with a <em>.gitignore</em> file; you can change this to use a different version control system, or no version control system, by using the <code>--vcs</code> flag.</p>
            <p>Open up <em>Cargo.toml</em> in your text editor of choice. It should look something like this:</p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[package]</span>
<span>name</span> = <span>"hello_cargo"</span>
<span>version</span> = <span>"0.1.0"</span>
<span>authors</span> = [<span>"Your Name &lt;you@example.com&gt;"</span>]
<span>
[dependencies]</span>
</code></pre>
            <p>This file is in the <a href="https://github.com/toml-lang/toml"><em>TOML</em></a>
                <!-- ignore -->(Tom's Obvious, Minimal Language) format. TOML is similar to INI but has some extra goodies and is used as Cargo’s configuration format.</p>
            <p>The first line, <code>[package]</code>, is a section heading that indicates that the following statements are configuring a package. As we add more information to this file, we’ll add other sections.</p>
            <p>The next three lines set the three bits of configuration that Cargo needs to see in order to know that it should compile your program: its name, what version it is, and who wrote it. Cargo gets your name and email information from your environment.
                If it’s not correct, go ahead and fix that and save the file.
            </p>
            <p>The last line, <code>[dependencies]</code>, is the start of a section for you to list any
                <em>crates</em> (which is what we call packages of Rust code) that your project will depend on so that Cargo knows to download and compile those too. We won't need any other crates for this project, but we will in the guessing game tutorial
                in the next chapter.</p>
            <p>Now let's look at <em>src/main.rs</em>:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Cargo has generated a "Hello World!" for you, just like the one we wrote earlier! So that part is the same. The differences between our previous project and the project generated by Cargo that we've seen so far are:</p>
            <ul>
                <li>Our code goes in the <em>src</em> directory</li>
                <li>The top level contains a <em>Cargo.toml</em> configuration file</li>
            </ul>
            <p>Cargo expects your source files to live inside the <em>src</em> directory so that the top-level project directory is just for READMEs, license information, configuration files, and anything else not related to your code. In this way, using
                Cargo helps you keep your projects nice and tidy. There's a place for everything, and everything is in its place.</p>
            <p>If you started a project that doesn't use Cargo, as we did with our project in the <em>hello_world</em> directory, you can convert it to a project that does use Cargo by moving your code into the <em>src</em> directory and creating an appropriate
                <em>Cargo.toml</em>.</p>
            <h3>Building and Running a Cargo Project</h3>
            <p>Now let's look at what's different about building and running your Hello World program through Cargo! To do so, enter the following commands:</p>
            <pre><code>$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
</code></pre>
            <p>This should have created an executable file in <em>target/debug/hello_cargo</em> (or
                <em>target\debug\hello_cargo.exe</em> on Windows), which you can run with this command:</p>
            <pre><code>$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!
</code></pre>
            <p>Bam! If all goes well, <code>Hello, world!</code> should print to the terminal once more.</p>
            <p>Running <code>cargo build</code> for the first time also causes Cargo to create a new file at the top level called <em>Cargo.lock</em>, which looks like this:</p>
            <p><span>Filename: Cargo.lock</span></p>
            <pre><code><span>[root]</span>
<span>name</span> = <span>"hello_cargo"</span>
<span>version</span> = <span>"0.1.0"</span>
</code></pre>
            <p>Cargo uses the <em>Cargo.lock</em> to keep track of dependencies in your application. This project doesn't have dependencies, so the file is a bit sparse. Realistically, you won't ever need to touch this file yourself; just let Cargo handle
                it.
            </p>
            <p>We just built a project with <code>cargo build</code> and ran it with
                <code>./target/debug/hello_cargo</code>, but we can also use <code>cargo run</code> to compile and then run:</p>
            <pre><code>$ cargo run
     Running \`target/debug/hello_cargo\`
Hello, world!
</code></pre>
            <p>Notice that this time, we didn't see the output telling us that Cargo was compiling <code>hello_cargo</code>. Cargo figured out that the files haven’t changed, so it just ran the binary. If you had modified your source code, Cargo would have
                rebuilt the project before running it, and you would have seen something like this:
            </p>
            <pre><code>$ cargo run
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
     Running \`target/debug/hello_cargo\`
Hello, world!
</code></pre>
            <p>So a few more differences we've now seen:</p>
            <ul>
                <li>Instead of using <code>rustc</code>, build a project using <code>cargo build</code> (or build and run it in one step with <code>cargo run</code>)</li>
                <li>Instead of the result of the build being put in the same directory as our code, Cargo will put it in the <em>target/debug</em> directory.</li>
            </ul>
            <p>The other advantage of using Cargo is that the commands are the same no matter what operating system you're on, so at this point we will no longer be providing specific instructions for Linux and Mac versus Windows.</p>
            <h3>Building for Release</h3>
            <p>When your project is finally ready for release, you can use <code>cargo build --release</code> to compile your project with optimizations. This will create an executable in <em>target/release</em> instead of <em>target/debug</em>. These optimizations
                make your Rust code run faster, but turning them on makes your program take longer to compile. This is why there are two different profiles: one for development when you want to be able to rebuild quickly and often, and one for building
                the final program you’ll give to a user that won't be rebuilt and that we want to run as fast as possible. If you're benchmarking the running time of your code, be sure to run <code>cargo build --release</code> and benchmark with the executable
                in <em>target/release</em>.</p>
            <h3>Cargo as Convention</h3>
            <p>With simple projects, Cargo doesn't provide a whole lot of value over just using <code>rustc</code>, but it will prove its worth as you continue. With complex projects composed of multiple crates, it’s much easier to let Cargo coordinate the
                build. With Cargo, you can just run <code>cargo build</code>, and it should work the right way. Even though this project is simple, it now uses much of the real tooling you’ll use for the rest of your Rust career. In fact, you can get
                started with virtually all Rust projects you want to work on with the following commands:</p>
            <pre><code>$ git clone someurl.com/someproject
$ cd someproject
$ cargo build
</code></pre>
            <blockquote>
                <p>Note: If you want to look at Cargo in more detail, check out the official
                    <a href="http://doc.crates.io/guide.html">Cargo guide</a>, which covers all of its features.</p>
            </blockquote>
        </section>`,
    "game": `
        <section class="content column is-6 is-offset-2">
            <h1>Guessing Game</h1>
            <p>Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program. You’ll learn about <code>let</code>, <code>match</code>, methods,
                associated functions, using external crates, and more! The following chapters will explore these ideas in more detail. In this chapter, you’ll practice the fundamentals.</p>
            <p>We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After entering a guess, it will indicate
                whether the guess is too low or too high. If the guess is correct, the game will print congratulations and exit.</p>
            <h2>Setting Up a New Project</h2>
            <p>To set up a new project, go to the <em>projects</em> directory that you created in Chapter 1, and make a new project using Cargo, like so:</p>
            <pre><code>$ cargo new guessing_game --bin
$ cd guessing_game
</code></pre>
            <p>The first command, <code>cargo new</code>, takes the name of the project (<code>guessing_game</code>) as the first argument. The <code>--bin</code> flag tells Cargo to make a binary project, similar to the one in Chapter 1. The second command
                changes to the new project’s directory.</p>
            <p>Look at the generated <em>Cargo.toml</em> file:</p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[package]</span>
<span>name</span> = <span>"guessing_game"</span>
<span>version</span> = <span>"0.1.0"</span>
<span>authors</span> = [<span>"Your Name &lt;you@example.com&gt;"</span>]
<span>
[dependencies]</span>
</code></pre>
            <p>If the author information that Cargo obtained from your environment is not correct, fix that in the file and save it again.</p>
            <p>As you saw in Chapter 1, <code>cargo new</code> generates a “Hello, world!” program for you. Check out the <em>src/main.rs</em> file:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Now let’s compile this “Hello, world!” program and run it in the same step using the <code>cargo run</code> command:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Hello, world!
</code></pre>
            <p>The <code>run</code> command comes in handy when you need to rapidly iterate on a project, and this game is such a project: we want to quickly test each iteration before moving on to the next one.</p>
            <p>Reopen the <em>src/main.rs</em> file. You’ll be writing all the code in this file.</p>
            <h2>Processing a Guess</h2>
            <p>The first part of the program will ask for user input, process that input, and check that the input is in the expected form. To start, we’ll allow the player to input a guess. Enter the code in Listing 2-1 into <em>src/main.rs</em>.</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>use</span> std::io;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);
}
</code></pre>
                <figcaption>
                    <p>Listing 2-1: Code to get a guess from the user and print it out</p>
                </figcaption>
            </figure>
            <p>This code contains a lot of information, so let’s go over it bit by bit. To obtain user input and then print the result as output, we need to bring the
                <code>io</code> (input/output) library into scope. The <code>io</code> library comes from the standard library (which is known as <code>std</code>):</p>
            <pre><code><span>use</span> std::io;
</code></pre>
            <p>By default, Rust brings only a few types into the scope of every program in
                <a href="https://doc.rust-lang.org/std/prelude/">the <em>prelude</em></a>
                <!-- ignore -->. If a type you want to use isn’t in the prelude, you have to bring that type into scope explicitly with a <code>use</code> statement. Using the <code>std::io</code> library provides you with a number of useful
                <code>io</code>-related features, including the functionality to accept user input.</p>
            <p>As you saw in Chapter 1, the <code>main</code> function is the entry point into the program:
            </p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
</code></pre>
            <p>The <code>fn</code> syntax declares a new function, the <code>()</code> indicate there are no parameters, and <code>{</code> starts the body of the function.</p>
            <p>As you also learned in Chapter 1, <code>println!</code> is a macro that prints a string to the screen:</p>
            <pre><code><span>println!</span>(<span>"Guess the number!"</span>);

<span>println!</span>(<span>"Please input your guess."</span>);
</code></pre>
            <p>This code is just printing a prompt stating what the game is and requesting input from the user.</p>
            <h3>Storing Values with Variables</h3>
            <p>Next, we’ll create a place to store the user input, like this:</p>
            <pre><code><span>let</span> <span>mut</span> guess = <span>String</span>::new();
</code></pre>
            <p>Now the program is getting interesting! There’s a lot going on in this little line. Notice that this is a <code>let</code> statement, which is used to create
                <em>variables</em>. Here’s another example:</p>
            <pre><code><span>let</span> foo = bar;
</code></pre>
            <p>This line will create a new variable named <code>foo</code> and bind it to the value
                <code>bar</code>. In Rust, variables are immutable by default. The following example shows how to use <code>mut</code> before the variable name to make a variable mutable:</p>
            <pre><code><span>let</span> foo = <span>5</span>; <span>// immutable</span>
<span>let</span> <span>mut</span> bar = <span>5</span>; <span>// mutable</span>
</code></pre>
            <blockquote>
                <p>Note: The <code>//</code> syntax starts a comment that continues until the end of the line. Rust ignores everything in comments.</p>
            </blockquote>
            <p>Now you know that <code>let mut guess</code> will introduce a mutable variable named
                <code>guess</code>. On the other side of the equal sign (<code>=</code>) is the value that <code>guess</code> is bound to, which is the result of calling <code>String::new</code>, a function that returns a new instance of a <code>String</code>.
                <a href="../std/string/struct.String.html"><code>String</code></a>
                <!-- ignore -->is a string type provided by the standard library that is a growable, UTF-8 encoded bit of text.
            </p>
            <p>The <code>::</code> syntax in the <code>::new</code> line indicates that <code>new</code> is an <em>associated
function</em> of the <code>String</code> type. An associated function is implemented on a type, in this case <code>String</code>, rather than on a particular instance of a <code>String</code>. Some languages call this a <em>static method</em>.</p>
            <p>This <code>new</code> function creates a new, empty <code>String</code>. You’ll find a <code>new</code> function on many types, because it’s a common name for a function that makes a new value of some kind.
            </p>
            <p>To summarize, the <code>let mut guess = String::new();</code> line has created a mutable variable that is currently bound to a new, empty instance of a <code>String</code>. Whew!</p>
            <p>Recall that we included the input/output functionality from the standard library with <code>use std::io;</code> on the first line of the program. Now we’ll call an associated function, <code>stdin</code>, on
                <code>io</code>:</p>
            <pre><code>io::stdin().read_line(&amp;<span>mut</span> guess)
    .expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>If we didn’t have the <code>use std::io</code> line at the beginning of the program, we could have written this function call as <code>std::io::stdin</code>. The <code>stdin</code> function returns an instance of <a href="../std/io/struct.Stdin.html"><code>std::io::Stdin</code></a>
                <!-- ignore -->, which is a type that represents a handle to the standard input for your terminal.</p>
            <p>The next part of the code, <code>.read_line(&amp;mut guess)</code>, calls the
                <a href="../std/io/struct.Stdin.html#method.read_line"><code>read_line</code></a>
                <!-- ignore -->method on the standard input handle to get input from the user. We’re also passing one argument to <code>read_line</code>: <code>&amp;mut guess</code>.</p>
            <p>The job of <code>read_line</code> is to take whatever the user types into standard input and place that into a string, so it takes that string as an argument. The string argument needs to be mutable so the method can change the string’s content
                by adding the user input.</p>
            <p>The <code>&amp;</code> indicates that this argument is a <em>reference</em>, which gives you a way to let multiple parts of your code access one piece of data without needing to copy that data into memory multiple times. References are a complex
                feature, and one of Rust’s major advantages is how safe and easy it is to use references. You don’t need to know a lot of those details to finish this program: Chapter 4 will explain references more thoroughly. For now, all you need to
                know is that like variables, references are immutable by default. Hence, we need to write <code>&amp;mut guess</code> rather than <code>&amp;guess</code> to make it mutable.</p>
            <p>We’re not quite done with this line of code. Although it’s a single line of text, it’s only the first part of the single logical line of code. The second part is this method:</p>
            <pre><code>.expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>When you call a method with the <code>.foo()</code> syntax, it’s often wise to introduce a newline and other whitespace to help break up long lines. We could have written this code as:</p>
            <pre><code>io::stdin().read_line(&amp;<span>mut</span> guess).expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>However, one long line is difficult to read, so it’s best to divide it, two lines for two method calls. Now let’s discuss what this line does.</p>
            <a class="header" href="#handling-potential-failure-with-the-result-type" name="handling-potential-failure-with-the-result-type">
                <h3>Handling Potential Failure with the <code>Result</code> Type</h3>
            </a>
            <p>As mentioned earlier, <code>read_line</code> puts what the user types into the string we’re passing it, but it also returns a value—in this case, an
                <a href="../std/io/type.Result.html"><code>io::Result</code></a>
                <!-- ignore -->. Rust has a number of types named
                <code>Result</code> in its standard library: a generic <a href="../std/result/enum.Result.html"><code>Result</code></a>
                <!-- ignore -->as well as specific versions for submodules, such as <code>io::Result</code>.</p>
            <p>The <code>Result</code> types are <a href="ch06-00-enums.html"><em>enumerations</em></a>
                <!-- ignore -->, often referred to as <em>enums</em>. An enumeration is a type that can have a fixed set of values, and those values are called the enum’s <em>variants</em>. Chapter 6 will cover enums in more detail.</p>
            <p>For <code>Result</code>, the variants are <code>Ok</code> or <code>Err</code>. <code>Ok</code> indicates the operation was successful, and inside the <code>Ok</code> variant is the successfully generated value.
                <code>Err</code> means the operation failed, and <code>Err</code> contains information about how or why the operation failed.</p>
            <p>The purpose of these <code>Result</code> types is to encode error handling information. Values of the <code>Result</code> type, like any type, have methods defined on them. An instance of <code>io::Result</code> has an <a href="../std/result/enum.Result.html#method.expect"><code>expect</code> method</a>
                <!-- ignore -->that you can call. If this instance of <code>io::Result</code> is an <code>Err</code> value, <code>expect</code> will cause the program to crash and display the message that you passed as an argument to <code>expect</code>. If the <code>read_line</code>                method returns an <code>Err</code>, it would likely be the result of an error coming from the underlying operating system. If this instance of
                <code>io::Result</code> is an <code>Ok</code> value, <code>expect</code> will take the return value that <code>Ok</code> is holding and return just that value to you so you could use it. In this case, that value is the number of characters
                the user entered into standard input.</p>
            <p>If we don’t call <code>expect</code>, the program will compile, but we’ll get a warning:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
src/main.rs:10:5: 10:39 warning: unused result which must be used,
#[warn(unused_must_use)] on by default
src/main.rs:10     io::stdin().read_line(&amp;mut guess);
                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</code></pre>
            <p>Rust warns that we haven’t used the <code>Result</code> value returned from <code>read_line</code>, indicating that the program hasn’t handled a possible error. The right way to suppress the warning is to actually write error handling, but
                since we just want to crash this program when a problem occurs, we can use <code>expect</code>. You’ll learn about recovering from errors in Chapter 9.</p>
            <h3>Printing Values with <code>println!</code> Placeholders</h3>
            <p>Aside from the closing curly brace, there’s only one more line to discuss in the code added so far, which is the following:</p>
            <pre><code><span>println!</span>(<span>"You guessed: {}"</span>, guess);
</code></pre>
            <p>This line prints out the string we saved the user’s input in. The set of <code>{}</code> is a placeholder that holds a value in place. You can print more than one value using <code>{}</code>: the first set of
                <code>{}</code> holds the first value listed after the format string, the second set holds the second value, and so on. Printing out multiple values in one call to <code>println!</code> would look like this:</p>
            <pre><code><span>let</span> x = <span>5</span>;
<span>let</span> y = <span>10</span>;

<span>println!</span>(<span>"x = {} and y = {}"</span>, x, y);
</code></pre>
            <p>This code would print out <code>x = 5 and y = 10</code>.</p>
            <h3>Testing the First Part</h3>
            <p>Let’s test the first part of the guessing game. You can run it using <code>cargo run</code>:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Guess the number!
Please input your guess.
6
You guessed: 6
</code></pre>
            <p>At this point, the first part of the game is done: we’re getting input from the keyboard and then printing it.</p>
            <h2>Generating a Secret Number</h2>
            <p>Next, we need to generate a secret number that the user will try to guess. The secret number should be different every time so the game is fun to play more than once. Let’s use a random number between 1 and 100 so the game isn’t too difficult.
                Rust doesn’t yet include random number functionality in its standard library. However, the Rust team does provide a <a href="https://crates.io/crates/rand"><code>rand</code> crate</a>.</p>
            <h3>Using a Crate to Get More Functionality</h3>
            <p>Remember that a <em>crate</em> is a package of Rust code. The project we’ve been building is a <em>binary crate</em>, which is an executable. The <code>rand</code> crate is a
                <em>library crate</em>, which contains code intended to be used in other programs.</p>
            <p>Cargo’s use of external crates is where it really shines. Before we can write code that uses <code>rand</code>, we need to modify the <em>Cargo.toml</em> file to include the
                <code>rand</code> crate as a dependency. Open that file now and add the following line to the bottom beneath the <code>[dependencies]</code> section header that Cargo created for you:
            </p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[dependencies]</span>

<span>rand</span> = <span>"0.3.14"</span>
</code></pre>
            <p>In the <em>Cargo.toml</em> file, everything that follows a header is part of a section that continues until another section starts. The <code>[dependencies]</code> section is where you tell Cargo which external crates your project depends
                on and which versions of those crates you require. In this case, we’ll specify the <code>rand</code> crate with the semantic version specifier <code>0.3.14</code>. Cargo understands <a href="http://semver.org">Semantic
Versioning</a>
                <!-- ignore -->(sometimes called <em>SemVer</em>), which is a standard for writing version numbers. The number <code>0.3.14</code> is actually shorthand for <code>^0.3.14</code>, which means “any version that has a public API compatible with version
                0.3.14.”
            </p>
            <p>Now, without changing any of the code, let’s build the project, as shown in Listing 2-2:</p>
            <figure>
                <pre><code>$ cargo build
    Updating registry \`https://github.com/rust-lang/crates.io-index\`
 Downloading rand v0.3.14
 Downloading libc v0.2.14
   Compiling libc v0.2.14
   Compiling rand v0.3.14
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
</code></pre>
                <figcaption>
                    <p>Listing 2-2: The output from running <code>cargo build</code> after adding the rand crate as a dependency</p>
                </figcaption>
            </figure>
            <p>You may see different version numbers (but they will all be compatible with the code, thanks to SemVer!), and the lines may be in a different order.</p>
            <p>Now that we have an external dependency, Cargo fetches the latest versions of everything from the <em>registry</em>, which is a copy of data from
                <a href="https://crates.io">Crates.io</a>. Crates.io is where people in the Rust ecosystem post their open source Rust projects for others to use.</p>
            <p>After updating the registry, Cargo checks the <code>[dependencies]</code> section and downloads any you don’t have yet. In this case, although we only listed <code>rand</code> as a dependency, Cargo also grabbed a copy of <code>libc</code>,
                because <code>rand</code> depends on
                <code>libc</code> to work. After downloading them, Rust compiles them and then compiles the project with the dependencies available.</p>
            <p>If you immediately run <code>cargo build</code> again without making any changes, you won’t get any output. Cargo knows it has already downloaded and compiled the dependencies, and you haven't changed anything about them in your
                <em>Cargo.toml</em> file. Cargo also knows that you haven't changed anything about your code, so it doesn't recompile that either. With nothing to do, it simply exits. If you open up the <em>src/main.rs</em> file, make a trivial change,
                then save it and build again, you’ll only see one line of output:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
</code></pre>
            <p>This line shows Cargo only updates the build with your tiny change to the
                <em>src/main.rs</em> file. Your dependencies haven't changed, so Cargo knows it can reuse what it has already downloaded and compiled for those. It just rebuilds your part of the code.</p>
            <h4>The <em>Cargo.lock</em> File Ensures Reproducible Builds</h4>
            <p>Cargo has a mechanism that ensures you can rebuild the same artifact every time you or anyone else builds your code: Cargo will use only the versions of the dependencies you specified until you indicate otherwise. For example, what happens
                if next week version <code>v0.3.15</code> of the <code>rand</code> crate comes out and contains an important bug fix but also contains a regression that will break your code?</p>
            <p>The answer to this problem is the <em>Cargo.lock</em> file, which was created the first time you ran <code>cargo build</code> and is now in your <em>guessing_game</em> directory. When you build a project for the first time, Cargo figures out
                all the versions of the dependencies that fit the criteria and then writes them to the <em>Cargo.lock</em> file. When you build your project in the future, Cargo will see that the <em>Cargo.lock</em> file exists and use the versions specified
                there rather than doing all the work of figuring out versions again. This lets you have a reproducible build automatically. In other words, your project will remain at <code>0.3.14</code> until you explicitly upgrade, thanks to the <em>Cargo.lock</em>                file.
            </p>
            <h4>Updating a Crate to Get a New Version</h4>
            <p>When you <em>do</em> want to update a crate, Cargo provides another command, <code>update</code>, which will:</p>
            <ol>
                <li>Ignore the <em>Cargo.lock</em> file and figure out all the latest versions that fit your specifications in <em>Cargo.toml</em>.</li>
                <li>If that works, Cargo will write those versions to the <em>Cargo.lock</em> file.</li>
            </ol>
            <p>But by default, Cargo will only look for versions larger than <code>0.3.0</code> and smaller than <code>0.4.0</code>. If the <code>rand</code> crate has released two new versions,
                <code>0.3.15</code> and <code>0.4.0</code>, you would see the following if you ran <code>cargo update</code>:</p>
            <pre><code>$ cargo update
    Updating registry \`https://github.com/rust-lang/crates.io-index\`
    Updating rand v0.3.14 -&gt; v0.3.15
</code></pre>
            <p>At this point, you would also notice a change in your <em>Cargo.lock</em> file noting that the version of the <code>rand</code> crate you are now using is <code>0.3.15</code>.</p>
            <p>If you wanted to use <code>rand</code> version <code>0.4.0</code> or any version in the <code>0.4.x</code> series, you’d have to update the <em>Cargo.toml</em> file to look like this instead:</p>
            <pre><code><span>[dependencies]</span>

<span>rand</span> = <span>"0.4.0"</span>
</code></pre>
            <p>The next time you run <code>cargo build</code>, Cargo will update the registry of crates available and reevaluate your <code>rand</code> requirements according to the new version you specified.</p>
            <p>There’s a lot more to say about <a href="http://doc.crates.io">Cargo</a>
                <!-- ignore -->and <a href="http://doc.crates.io/crates-io.html">its
ecosystem</a>
                <!-- ignore -->that Chapter 14 will discuss, but for now, that’s all you need to know. Cargo makes it very easy to reuse libraries, so Rustaceans are able to write smaller projects that are assembled from a number of packages.</p>
            <h3>Generating a Random Number</h3>
            <p>Let’s start <em>using</em> <code>rand</code>. The next step is to update <em>src/main.rs</em>, as shown in Listing 2-3:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);
}
</code></pre>
                <figcaption>
                    <p>Listing 2-3: Code changes needed in order to generate a random number</p>
                </figcaption>
            </figure>
            <p>We’re adding a <code>extern crate rand;</code> line to the top that lets Rust know we’ll be using that external dependency. This also does the equivalent of calling <code>use rand</code>, so now we can call anything in the <code>rand</code>                crate by prefixing it with
                <code>rand::</code>.</p>
            <p>Next, we’re adding another <code>use</code> line: <code>use rand::Rng</code>. <code>Rng</code> is a trait that defines methods that random number generators implement, and this trait must be in scope for us to use those methods. Chapter 10
                will cover traits in detail.</p>
            <p>Also, we’re adding two more lines in the middle. The <code>rand::thread_rng</code> function will give us the particular random number generator that we’re going to use: one that is local to the current thread of execution and seeded by the
                operating system. Next, we call the <code>gen_range</code> method on the random number generator. This method is defined by the <code>Rng</code> trait that we brought into scope with the
                <code>use rand::Rng</code> statement. The <code>gen_range</code> method takes two numbers as arguments and generates a random number between them. It’s inclusive on the lower bound but exclusive on the upper bound, so we need to specify
                <code>1</code> and <code>101</code> to request a number between 1 and 100.</p>
            <p>Knowing which traits to use and which functions and methods to call from a crate isn’t something that you’ll just <em>know</em>. Instructions for using a crate are in each crate’s documentation. Another neat feature of Cargo is that you can
                run the <code>cargo doc --open</code> command that will build documentation provided by all of your dependencies locally and open it in your browser. If you’re interested in other functionality in the <code>rand</code> crate, for example,
                run <code>cargo doc --open</code> and click <code>rand</code> in the sidebar on the left.</p>
            <p>The second line that we added to the code prints the secret number. This is useful while we’re developing the program to be able to test it, but we’ll delete it from the final version. It’s not much of a game if the program prints the answer
                as soon as it starts!</p>
            <p>Try running the program a few times:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Guess the number!
The secret number is: 7
Please input your guess.
4
You guessed: 4
$ cargo run
     Running \`target/debug/guessing_game\`
Guess the number!
The secret number is: 83
Please input your guess.
5
You guessed: 5
</code></pre>
            <p>You should get different random numbers, and they should all be numbers between 1 and 100. Great job!</p>
            <h2>Comparing the Guess to the Secret Number</h2>
            <p>Now that we have user input and a random number, we can compare them. That step is shown in Listing 2-4:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);

    <span>match</span> guess.cmp(&amp;secret_number) {
        Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
        Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
        Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
    }
}
</code></pre>
                <figcaption>
                    <p>Listing 2-4: Handling the possible return values of comparing two numbers</p>
                </figcaption>
            </figure>
            <p>The first new bit here is another <code>use</code>, bringing a type called
                <code>std::cmp::Ordering</code> into scope from the standard library. <code>Ordering</code> is another enum, like <code>Result</code>, but the variants for <code>Ordering</code> are
                <code>Less</code>,
                <code>Greater</code>, and <code>Equal</code>. These are the three outcomes that are possible when you compare two values.</p>
            <p>Then we add five new lines at the bottom that use the <code>Ordering</code> type:</p>
            <pre><code><span>match</span> guess.cmp(&amp;secret_number) {
    Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
    Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
    Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
}
</code></pre>
            <p>The <code>cmp</code> method compares two values and can be called on anything that can be compared. It takes a reference to whatever you want to compare with: here it’s comparing the <code>guess</code> to the
                <code>secret_number</code>. <code>cmp</code> returns a variant of the
                <code>Ordering</code> enum we brought into scope with the <code>use</code> statement. We use a
                <a href="ch06-02-match.html"><code>match</code></a>
                <!-- ignore -->expression to decide what to do next based on which variant of <code>Ordering</code> was returned from the call to <code>cmp</code> with the values in <code>guess</code> and <code>secret_number</code>.</p>
            <p>A <code>match</code> expression is made up of <em>arms</em>. An arm consists of a <em>pattern</em> and the code that should be run if the value given to the beginning of the <code>match</code> expression fits that arm’s pattern. Rust takes
                the value given to <code>match</code> and looks through each arm’s pattern in turn. The <code>match</code> construct and patterns are powerful features in Rust that let you express a variety of situations your code might encounter and
                helps ensure that you handle them all. These features will be covered in detail in Chapter 6 and Chapter 19, respectively.</p>
            <p>Let’s walk through an example of what would happen with the <code>match</code> expression used here. Say that the user has guessed 50, and the randomly generated secret number this time is 38. When the code compares 50 to 38, the <code>cmp</code>                method will return <code>Ordering::Greater</code>, because 50 is greater than 38. <code>Ordering::Greater</code> is the value that the <code>match</code> expression gets. It looks at the first arm’s pattern, <code>Ordering::Less</code>,
                but the value <code>Ordering::Greater</code> does not match
                <code>Ordering::Less</code>. So it ignores the code in that arm and moves to the next arm. The next arm’s pattern, <code>Ordering::Greater</code>, <em>does</em> match
                <code>Ordering::Greater</code>! The associated code in that arm will execute and print
                <code>Too big!</code> to the screen. The <code>match</code> expression ends because it has no need to look at the last arm in this particular scenario.</p>
            <p>However, the code in Listing 2-4 won’t compile yet. Let’s try it:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
error[E0308]: mismatched types
  --&gt; src/main.rs:23:21
   |
23 |     match guess.cmp(&amp;secret_number) {
   |                     ^^^^^^^^^^^^^^ expected struct \`std::string::String\`, found integral variable
   |
   = note: expected type \`&amp;std::string::String\`
   = note:    found type \`&amp;{integer}\`

error: aborting due to previous error
Could not compile \`guessing_game\`.
</code></pre>
            <p>The core of the error states that there are <em>mismatched types</em>. Rust has a strong, static type system. However, it also has type inference. When we wrote
                <code>let guess = String::new()</code>, Rust was able to infer that <code>guess</code> should be a
                <code>String</code> and didn’t make us write the type. The <code>secret_number</code>, on the other hand, is a number type. A few number types can have a value between 1 and 100:
                <code>i32</code>, a 32-bit number; <code>u32</code>, an unsigned 32-bit number; <code>i64</code>, a 64-bit number; as well as others. Rust defaults to an <code>i32</code>, which is the type of
                <code>secret_number</code> unless we add type information elsewhere that would cause Rust to infer a different numerical type. The reason for the error is that Rust will not compare a string and a number type.</p>
            <p>Ultimately, we want to convert the <code>String</code> the program reads as input into a real number type so we can compare it to the guess numerically. We can do that by adding the following two lines to the <code>main</code> function body:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>let</span> guess: <span>u32</span> = guess.trim().parse()
        .expect(<span>"Please type a number!"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);

    <span>match</span> guess.cmp(&amp;secret_number) {
        Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
        Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
        Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
    }
}
</code></pre>
            <p>The two new lines are:</p>
            <pre><code><span>let</span> guess: <span>u32</span> = guess.trim().parse()
    .expect(<span>"Please type a number!"</span>);
</code></pre>
            <p>We create a variable named <code>guess</code>. But wait, doesn’t the program already have a variable named <code>guess</code>? It does, but Rust allows us to
                <em>shadow</em> the previous value of <code>guess</code> with a new one. This feature is often used in similar situations in which you want to convert a value from one type to another type. Shadowing lets us reuse the
                <code>guess</code> variable name rather than forcing us to create two unique variables, like <code>guess_str</code> and <code>guess</code> for example. (Chapter 3 covers shadowing in more detail.)</p>
            <p>We bind <code>guess</code> to the expression <code>guess.trim().parse()</code>. The <code>guess</code> in the expression refers to the original <code>guess</code> that was a <code>String</code> with the input in it. The <code>trim</code> method
                on a <code>String</code> instance will eliminate any whitespace at the beginning and end. <code>u32</code> can only contain numerical characters, but the user must press the Return key to satisfy <code>read_line</code>. When the user presses
                Return, a newline character is added to the string. For example, if the user types 5 and presses return, <code>guess</code> looks like this: <code>5\n</code>. The <code>\n</code> represents “newline,” the return key. The <code>trim</code>                method eliminates <code>\n</code>, resulting in just
                <code>5</code>.</p>
            <p>The <a href="../std/primitive.str.html#method.parse"><code>parse</code> method on strings</a>
                <!-- ignore -->parses a string into some kind of number. Because this method can parse a variety of number types, we need to tell Rust the exact number type we want by using <code>let guess: u32</code>. The colon (<code>:</code>) after <code>guess</code>                tells Rust we’ll annotate the variable’s type. Rust has a few built-in number types; the <code>u32</code> seen here is an unsigned, 32-bit integer. It’s a good default choice for a small positive number. You’ll learn about other number
                types in Chapter 3. Additionally, the <code>u32</code> annotation in this example program and the comparison with <code>secret_number</code> means that Rust will infer that <code>secret_number</code> should be a <code>u32</code> as well.
                So now the comparison will be between two values of the same type!</p>
            <p>The call to <code>parse</code> could easily cause an error. If, for example, the string contained <code>A👍%</code>, there would be no way to convert that to a number. Because it might fail, the <code>parse</code> method returns a <code>Result</code>                type, much like the
                <code>read_line</code> method does as discussed earlier in “Handling Potential Failure with the Result Type” on page XX. We’ll treat this <code>Result</code> the same way by using the <code>expect</code> method again. If <code>parse</code>                returns an <code>Err</code> <code>Result</code> variant because it couldn’t create a number from the string, the <code>expect</code> call will crash the game and print the message we give it. If <code>parse</code> can successfully convert
                the string to a number, it will return the <code>Ok</code> variant of <code>Result</code>, and
                <code>expect</code> will return the number that we want from the <code>Ok</code> value.</p>
            <p>Let’s run the program now!</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 58
Please input your guess.
  76
You guessed: 76
Too big!
</code></pre>
            <p>Nice! Even though spaces were added before the guess, the program still figured out that the user guessed 76. Run the program a few times to verify the different behavior with different kinds of input: guess the number correctly, guess a number
                that is too high, and guess a number that is too low.</p>
            <p>We have most of the game working now, but the user can make only one guess. Let’s change that by adding a loop!</p>
            <a class="header" href="#allowing-multiple-guesses-with-looping" name="allowing-multiple-guesses-with-looping">
                <h2>Allowing Multiple Guesses with Looping</h2>
            </a>
            <p>The <code>loop</code> keyword gives us an infinite loop. Add that now to give users more chances at guessing the number:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = guess.trim().parse()
            .expect(<span>"Please type a number!"</span>);

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
        }
    }
}
</code></pre>
            <p>As you can see, we’ve moved everything into a loop from the guess input prompt onward. Be sure to indent those lines another four spaces each, and run the program again. Notice that there is a new problem because the program is doing exactly
                what we told it to do: ask for another guess forever! It doesn’t seem like the user can quit!</p>
            <p>The user could always halt the program by using the keyboard shortcut <code>Ctrl-C</code>. But there’s another way to escape this insatiable monster that we mentioned in the <code>parse</code> discussion in “Comparing the Guesses” on page
                XX: if the user enters a non-number answer, the program will crash. The user can take advantage of that in order to quit, as shown here:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 59
Please input your guess.
45
You guessed: 45
Too small!
Please input your guess.
60
You guessed: 60
Too big!
Please input your guess.
59
You guessed: 59
You win!
Please input your guess.
quit
thread 'main' panicked at 'Please type a number!: ParseIntError { kind: InvalidDigit }', src/libcore/result.rs:785
note: Run with \`RUST_BACKTRACE=1\` for a backtrace.
error: Process didn't exit successfully: \`target/debug/guess\` (exit code: 101)
</code></pre>
            <p>Typing <code>quit</code> actually quits the game, but so will any other non-number input. However, this is suboptimal to say the least. We want the game to automatically stop when the correct number is guessed.</p>
            <h3>Quitting After a Correct Guess</h3>
            <p>Let’s program the game to quit when the user wins by adding a <code>break</code>:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = guess.trim().parse()
            .expect(<span>"Please type a number!"</span>);

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; {
                <span>println!</span>(<span>"You win!"</span>);
                <span>break</span>;
            }
        }
    }
}
</code></pre>
            <p>By adding the <code>break</code> line after <code>You win!</code>, the program will exit the loop when the user guesses the secret number correctly. Exiting the loop also means exiting the program, because the loop is the last part of <code>main</code>.</p>
            <a class="header" href="#handling-invalid-input" name="handling-invalid-input">
                <h3>Handling Invalid Input</h3>
            </a>
            <p>To further refine the game’s behavior, rather than crashing the program when the user inputs a non-number, let’s make the game ignore a non-number so the user can continue guessing. We can do that by altering the line where <code>guess</code>                is converted from a <code>String</code> to a <code>u32</code>:</p>
            <pre><code><span>let</span> guess: <span>u32</span> = <span>match</span> guess.trim().parse() {
    <span class="hljs-literal">Ok</span>(num) =&gt; num,
    <span class="hljs-literal">Err</span>(_) =&gt; <span>continue</span>,
};
</code></pre>
            <p>Switching from an <code>expect</code> call to a <code>match</code> expression is how you generally move from crash on error to actually handling the error. Remember that <code>parse</code> returns a
                <code>Result</code> type, and <code>Result</code> is an enum that has the variants <code>Ok</code> or
                <code>Err</code>. We’re using a <code>match</code> expression here, like we did with the <code>Ordering</code> result of the <code>cmp</code> method.</p>
            <p>If <code>parse</code> is able to successfully turn the string into a number, it will return an <code>Ok</code> value that contains the resulting number. That <code>Ok</code> value will match the first arm’s pattern, and the <code>match</code>                expression will just return the <code>num</code> value that <code>parse</code> produced and put inside the <code>Ok</code> value. That number will end up right where we want it in the new <code>guess</code> variable we’re creating.</p>
            <p>If <code>parse</code> is <em>not</em> able to turn the string into a number, it will return an
                <code>Err</code> value that contains more information about the error. The <code>Err</code> value does not match the <code>Ok(num)</code> pattern in the first <code>match</code> arm, but it does match the <code>Err(_)</code> pattern in
                the second arm. The <code>_</code> is a catchall value; in this example, we’re saying we want to match all <code>Err</code> values, no matter what information they have inside them. So the program will execute the second arm’s code, <code>continue</code>,
                which means to go to the next iteration of the <code>loop</code> and ask for another guess. So effectively, the program ignores all errors that <code>parse</code> might encounter!</p>
            <p>Now everything in the program should work as expected. Let’s try it by running
                <code>cargo run</code>:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 61
Please input your guess.
10
You guessed: 10
Too small!
Please input your guess.
99
You guessed: 99
Too big!
Please input your guess.
foo
Please input your guess.
61
You guessed: 61
You win!
</code></pre>
            <p>Awesome! With one tiny final tweak, we will finish the guessing game: recall that the program is still printing out the secret number. That worked well for testing, but it ruins the game. Let’s delete the <code>println!</code> that outputs
                the secret number. Listing 2-5 shows the final code:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = <span>match</span> guess.trim().parse() {
            <span class="hljs-literal">Ok</span>(num) =&gt; num,
            <span class="hljs-literal">Err</span>(_) =&gt; <span>continue</span>,
        };

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; {
                <span>println!</span>(<span>"You win!"</span>);
                <span>break</span>;
            }
        }
    }
}
</code></pre>
                <figcaption>
                    <p>Listing 2-5: Complete code of the guessing game</p>
                </figcaption>
            </figure>
            <a class="header" href="#summary" name="summary">
                <h2>Summary</h2>
            </a>
            <p>At this point, you’ve successfully built the guessing game! Congratulations!</p>
            <p>This project was a hands-on way to introduce you to many new Rust concepts:
                <code>let</code>, <code>match</code>, methods, associated functions, using external crates, and more. In the next few chapters, you’ll learn about these concepts in more detail. Chapter 3 covers concepts that most programming languages
                have, such as variables, data types, and functions, and shows how to use them in Rust. Chapter 4 explores ownership, which is a Rust feature that is most different from other languages. Chapter 5 discusses structs and method syntax, and
                Chapter 6 endeavors to explain enums.</p>
        </section>`,
    "concepts": `<section class="content column is-6 is-offset-2">
                    <a class="header" href="#common-programming-concepts" name="common-programming-concepts"><h1>Common Programming Concepts</h1></a>
<p>This chapter covers concepts that appear in almost every programming language
and how they work in Rust. Many programming languages have much in common at
their core. None of the concepts presented in this chapter are unique to Rust,
but we’ll discuss them in the context of Rust and explain their conventions.</p>
<p>Specifically, you’ll learn about variables, basic types, functions, comments,
and control flow. These foundations will be in every Rust program, and learning
them early will give you a strong core to start from.</p>
<!-- PROD: START BOX -->
<blockquote>
<a class="header" href="#keywords" name="keywords"><h3>Keywords</h3></a>
<p>The Rust language has a set of <em>keywords</em> that have been reserved for use by
the language only, much like other languages do. Keep in mind that you cannot
use these words as names of variables or functions. Most of the keywords have
special meanings, and you’ll be using them to do various tasks in your Rust
programs; a few have no current functionality associated with them but have
been reserved for functionality that might be added to Rust in the future. You
can find a list of the keywords in Appendix A.</p>
</blockquote>
<!-- PROD: END BOX -->

                </section>`
}