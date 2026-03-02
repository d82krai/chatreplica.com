import Link from "next/link";

export default function ChatMockupsForEducation() {
  return (
    <>
      <p className="text-lg leading-relaxed text-gray-600">
        Digital communication is a core part of modern life, and educators are
        increasingly turning to chat mockup tools to teach critical skills
        around online safety, communication, and digital literacy. Here&apos;s
        how chat mockups are transforming education and training programs.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Cyberbullying Awareness Programs
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          One of the most impactful uses of chat mockups in education is
          cyberbullying prevention. Teachers and counselors use realistic
          conversation screenshots to:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>
            <strong>Show real-world examples</strong> — Create realistic{" "}
            <Link
              href="/whatsapp"
              className="text-indigo-600 hover:underline"
            >
              WhatsApp
            </Link>{" "}
            or{" "}
            <Link
              href="/instagram"
              className="text-indigo-600 hover:underline"
            >
              Instagram DM
            </Link>{" "}
            mockups that illustrate bullying scenarios without exposing real
            students&apos; conversations
          </li>
          <li>
            <strong>Teach recognition</strong> — Help students identify
            different forms of cyberbullying including exclusion, rumor
            spreading, and direct harassment
          </li>
          <li>
            <strong>Practice responses</strong> — Walk through appropriate
            responses and de-escalation techniques
          </li>
          <li>
            <strong>Create discussion starters</strong> — Use mockup
            conversations as prompts for classroom discussions
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Digital Literacy Courses
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Teaching students to navigate digital communication responsibly is a
          growing priority. Chat mockups help educators illustrate:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>
            <strong>Phishing and scam awareness</strong> — Create mockup
            conversations showing common social engineering tactics
          </li>
          <li>
            <strong>Privacy protection</strong> — Demonstrate what personal
            information should never be shared in chats
          </li>
          <li>
            <strong>Healthy communication</strong> — Compare constructive and
            destructive conversation patterns
          </li>
          <li>
            <strong>Media literacy</strong> — Teach students that screenshots
            can be fabricated, building critical thinking about digital evidence
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Customer Service Training
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Businesses use chat mockups to train customer service representatives.{" "}
          <Link href="/facebook" className="text-indigo-600 hover:underline">
            Messenger mockups
          </Link>{" "}
          are particularly useful here since many brands handle customer
          inquiries through Facebook Messenger. Training scenarios include:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>Handling complaint escalation with empathy</li>
          <li>Product inquiry response templates</li>
          <li>Dealing with difficult or angry customers</li>
          <li>Maintaining brand voice across conversations</li>
          <li>Following compliance and regulatory guidelines</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Language Learning
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Language teachers use chat mockups to create authentic conversation
          examples that feel more natural than textbook dialogues. Since
          messaging is how most people actually communicate in a foreign
          language, chat-style exercises help students practice:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>Informal language and slang used in real conversations</li>
          <li>Common abbreviations and emoji usage by culture</li>
          <li>Appropriate register (formal vs. casual) for different contexts</li>
          <li>Reading comprehension with realistic conversation formats</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          How Educators Use ChatReplica
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          <Link href="/" className="text-indigo-600 hover:underline">
            ChatReplica
          </Link>{" "}
          is ideal for educational use because it&apos;s free, requires no
          sign-up, and processes everything in the browser — meaning no student
          data is ever collected. Educators can quickly generate realistic
          mockups across{" "}
          <Link href="/whatsapp" className="text-indigo-600 hover:underline">
            WhatsApp
          </Link>
          ,{" "}
          <Link href="/facebook" className="text-indigo-600 hover:underline">
            Messenger
          </Link>
          ,{" "}
          <Link href="/instagram" className="text-indigo-600 hover:underline">
            Instagram
          </Link>
          , and{" "}
          <Link href="/twitter" className="text-indigo-600 hover:underline">
            X (Twitter)
          </Link>{" "}
          platforms and download them as high-resolution PNGs for
          presentations, worksheets, and training materials.
        </p>
      </section>
    </>
  );
}
