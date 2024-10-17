import { db } from 'api/src/lib/db'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

export default async () => {
  try {
    const users = [
      {
        id: 1,
        email: 'user.one@example.com',
        hashedPassword: 'fake_hash',
        fullName: 'User One',
        salt: 'fake_salt',
      },
      {
        id: 2,
        email: 'user.two@example.com',
        hashedPassword: 'fake_hash',
        fullName: 'User Two',
        salt: 'fake_salt',
      },
    ]

    if ((await db.user.count()) === 0) {
      await Promise.all(users.map((user) => db.user.create({ data: user })))
    } else {
      console.log('Users already seeded')
    }
  } catch (error) {
    console.error(error)
  }

  try {
    const posts = [
      {
        title: 'Welcome to the blog!',
        body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard. Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke. Ethical bitters fixie freegan, helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
        imageUrl:
          'https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorId: 1,
      },
      {
        title: 'A little more about me',
        body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/2f/Raclette_20040817_140816.jpg',
        authorId: 1,
      },
      {
        title: 'What is the meaning of life?',
        body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
        imageUrl:
          'https://images.unsplash.com/photo-1616829412338-b4dce88dfc54?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorId: 2,
      },
    ]

    if ((await db.post.count()) === 0) {
      await Promise.all(
        posts.map(async (post) => {
          const newPost = await db.post.create({ data: post })

          console.log(newPost)
        })
      )
    } else {
      console.log('Posts already seeded')
    }
  } catch (error) {
    console.error(error)
  }

  try {
    // Create your database records here! For example, seed some users:
    //
    // const users = [
    //   { name: 'Alice', email: 'alice@redwoodjs.com' },
    //   { name: 'Bob', email: 'bob@redwoodjs.com' },
    // ]
    //
    // await db.user.createMany({ data: users })

    console.info(
      '\n  No seed data, skipping. See scripts/seed.ts to start seeding your database!\n'
    )
  } catch (error) {
    console.error(error)
  }
}
