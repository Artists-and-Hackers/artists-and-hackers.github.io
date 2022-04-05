---
layout: episode
episode-number: Ep. 12
title:  "Art Tools: Winterbloom's Open Source Synthesizer Modules"
date:   2022-04-04 08:00:00 -0400
display-date: April 4th, 2022
categories: Episode
header-image: "/assets/images/episode_images/header_images/ep12_header.png"
header-color: "#e7511c"
description: "In this Art Tools episode we interview Thea Flowers of Winterbloom, an open source music hardware company producing hackable music modules and kits for synthesizers. And we try out the Big Honking Button."
people: ["Thea Flowers"]
tags: ["Tools", "Hardware Hacking"]
code_tags: ["tools", "hardware_hacking" ]
applePodcasts: ""
spotify: ""
tools: []
tool_links: []
fileLink: "https://mcdn.podbean.com/mf/web/93283t/ep12_winterbloom.mp3"
transcript: transcripts/ep12.html
---

Art Tools are our series of mini episodes with the creators of innovative and experimental software and hardware tools for creative expression.

Our guest today is Thea Flowers of [Winterbloom](https://winterbloom.com). Winterbloom produces new, open source modular synth hardware modules for making music. These are devices that can do things like make far-out space synth sounds, act as a mixer, or an audio sampler. The world of  synthesizers has a huge number of companies. Thea’s Winterbloom stands out for its beautiful designs, but perhaps even more notably, its commitment to creating beginner-friendly tutorials and using a hackable CircuitPython codebase, a friendly language for easily writing software for hardware projects.

In research for this episode we purchased a [Big Honking Button](https://honk.wntr.dev/), one of the first modules produced by Winterbloom. It is available as a kit of parts or complete. You plug it into a Eurorack modular synthesizer to make sounds with it. Eurorack is the name for an ecosystem of cross-compatible music hardware produced by hundreds of manufacturers, from large companies like Moog and Behringer to much smaller companies. Winterbloom's unique open source hackable stance means that it publishes code and instructions on how to modify their hardware in order to tweak the music hardware to your own particular needs.

By default the Big Honking Button features a large arcade button that emits a punishing goose honk each time you press the button. We started by changing this sound. Following Winterbloom's instructions we plugged our Big Honking Button into a laptop, where it showed up as if it was an external drive. The first step we took was replacing the honk sound file with a bell sound we had. Immediately the module restarted, and when we pressed the Big Honking Button our new sound could be heard. Next we added in more sound samples. We opened the code.py file, and using example code from Winterbloom's website we modified the code to play a different sound sample depending on receiving different input voltage such as using a slider or a dial. At first, our module didn't seem to work the way we had expected. We asked some questions on the Winterbloom discord, where friendly folks chatted with us and Thea pointed us in the right direction. We needed to update our Big Honking Button's libraries to the current release in order to use the latest code features. This was simple, basically copying files over and restarting, and in short order our modified code and sound samples on the Big Honking Button were producing both cacophonous and blissed-out drones to our delight. 

This experience of in essence changing the very nature of how the hardware works felt really incredible and unique. Doubly so as we started to jam with our customized music hardware. The fact that it's possible to do this in the simplified Python-based CircuitPython, using easy-to-follow example code made this a straightforward and gratifying experience, and would be accessible even to those with a minimum of programming experience, especially with the helpful online community.

<br>

![Thea Flowers]({{site.baseurl}}/assets/images/thea.jpg)  
Thea Flowers  
*image description: Avatar illustration of Thea Flowers by Andrea Caprotti. Portrait of an illustrated white woman with blue curtain bangs and shag hair. She is wearing a black shirt and choker. Her eyes are blue under clear glasses and she is wearing small blue dot earrings.*

### Guests

<a href="https://thea.codes/" alt="Thea Flowers" class="nameTag">Thea Flowers</a> is a hardware and software engineer with a broad skillset and deep expertise in developer relations and technical writing. Her mission in life is to empower people of all backgrounds using open source software and hardware. She spends her time running an independent synthesizer company, Winterbloom, and was a Python Foundation 2020 Fellow.

### Credits

Our audio production is by Max Ludlow. Episode coordination and web design by Caleb Stone. This episode was supported by Purchase College.

Our music on today’s episode is [Lost](https://freemusicarchive.org/music/Metre/alternator/lost-2) by Metre, and [RELB Eurorack Sesh 6 20 14 tapebounce](https://freemusicarchive.org/music/Russell_E_L_Butler/Constructions/Russell_E_L_Butler_-_Constructions_-_06_RELB_Eurorack_Sesh_6_20_14tapebounce) by Russell Ellington Langston Butler. Original honking sample by Winterbloom.

