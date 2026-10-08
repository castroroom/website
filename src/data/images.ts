// Single source of truth for every content photo: filename (URL), dimensions,
// alt text, title and description. Components, JSON-LD and the sitemap all read from here.
// To change how a photo is described anywhere on the site, edit it once, here.
export const SITE = 'https://castroroom.com';

export interface SiteImage {
  file: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  description: string;
}

export const images = {
  hero: { file: "san-francisco-yoga-studio-castro-room-interior.jpg", width: 2000, height: 1333, title: "The Castro Room yoga studio interior", alt: "Empty yoga studio with hardwood floors, warm peach walls and pendant lamps at The Castro Room in San Francisco", description: "The practice room at The Castro Room, a yoga studio at 97 Collingwood Street in San Francisco's Castro neighborhood: hardwood floors, tall windows, wainscoting and pendant lamps." },
  foldClass: { file: "yoga-class-students-folding-forward-castro-room.jpg", width: 2000, height: 1333, title: "Students folding forward in a yoga class", alt: "Students folding forward on their mats during a group yoga class at The Castro Room", description: "A full class of students folds forward on their mats in the warm light of the practice room during a group yoga class at The Castro Room in San Francisco." },
  mats: { file: "yoga-mats-bolster-notebook-sunlit-studio-floor.jpg", width: 2000, height: 1333, title: "Yoga mats and bolster in a sunlit studio", alt: "Yoga mats, a bolster and a notebook on the sunlit hardwood floor of the studio", description: "Yoga mats, a bolster and a notebook rest on the hardwood floor of The Castro Room as sunlight and shadow cross the studio." },
  triangle: { file: "vinyasa-yoga-class-triangle-pose-san-francisco.jpg", width: 2000, height: 1333, title: "Vinyasa yoga class in triangle pose", alt: "Students in triangle pose during a vinyasa yoga class at The Castro Room in San Francisco", description: "A full class practices triangle pose beneath the pendant lamps of The Castro Room, a vinyasa yoga studio in San Francisco's Castro neighborhood." },
  manual: { file: "castro-room-yoga-teacher-training-manual.jpg", width: 2000, height: 889, title: "Castro Room teacher training manual", alt: "Spiral-bound Castro Room teacher training manual on a dark yoga mat", description: "A spiral-bound notebook labeled \"castro room teacher training\" rests on a dark yoga mat beside the studio's wood floor." },
  flow: { file: "vinyasa-yoga-flow-class-castro-san-francisco.jpg", width: 1067, height: 1600, title: "Vinyasa flow class in motion", alt: "Long-exposure photo of a vinyasa yoga flow class in motion at The Castro Room", description: "A long-exposure photograph captures the movement of a vinyasa yoga flow class beneath the pendant lamps of The Castro Room in San Francisco." },
  discussion: { file: "yoga-teacher-training-san-francisco-group-discussion.jpg", width: 1600, height: 1067, title: "Yoga teacher training group discussion", alt: "Yoga teacher training students seated on the studio floor as one raises a hand during a group discussion", description: "Students sit on bolsters and mats in a circle while a teacher beside a whiteboard leads a discussion during The Castro Room's 200-hour yoga teacher training in San Francisco." },
  sidewalkLunch: { file: "yoga-teacher-training-students-sidewalk-lunch.jpg", width: 1067, height: 1600, title: "Teacher training students at lunch outside the studio", alt: "Yoga teacher training students eating lunch on the sunny sidewalk outside The Castro Room", description: "Between sessions, students in The Castro Room's yoga teacher training sit and eat lunch in the sun on the sidewalk outside the studio in San Francisco's Castro neighborhood." },
  lecture: { file: "yoga-teacher-training-lecture-castro-room.jpg", width: 1066, height: 1600, title: "Yoga teacher training lecture", alt: "Students seated on bolsters facing a whiteboard during a yoga teacher training lecture", description: "Students sit on bolsters for a seated lecture beside a whiteboard in the practice room at The Castro Room during yoga teacher training." },
  notes: { file: "yoga-teacher-training-student-taking-notes.jpg", width: 1067, height: 1600, title: "Student taking notes during teacher training", alt: "A yoga teacher training student writes in an open notebook on the studio floor", description: "A student leans over an open notebook on the hardwood floor while others settle in along the wall of the practice room at The Castro Room." },
  notebooks: { file: "yoga-teacher-training-notebooks-cork-block.jpg", width: 1067, height: 1600, title: "Notebooks on a cork yoga block", alt: "Composition notebooks stacked on a cork block beside a blanket and water bottle in the studio", description: "Composition and spiral notebooks sit on a cork yoga block next to a woven blanket, a bag and a water bottle along the wall of the studio." },
  chatting: { file: "yoga-teacher-training-students-chatting-outside-studio.jpg", width: 1600, height: 1067, title: "Students chatting outside the studio between sessions", alt: "Yoga teacher training students chatting in the sun outside the studio entrance", description: "Students gather in the sun outside The Castro Room's entrance to talk and eat during a break in the yoga teacher training." },
  reading: { file: "yoga-teacher-training-student-reading-on-mat.jpg", width: 1600, height: 1067, title: "Student reading on a yoga mat", alt: "A student lies on a yoga mat reading a book in a sunlit corner of the studio", description: "A student lies back on a yoga mat with a book in the sunlight along the wall of the practice room, with bolsters and blocks nearby." },
  circle: { file: "yoga-teacher-training-seated-circle-castro-room.jpg", width: 2000, height: 1333, title: "Seated circle during yoga teacher training", alt: "Students seated in a circle on the studio floor, smiling and listening, during yoga teacher training", description: "A circle of students sits cross-legged on the hardwood floor of the practice room at The Castro Room in San Francisco, listening and smiling during yoga teacher training." },
  seated: { file: "yoga-teacher-training-students-seated-on-bolsters.jpg", width: 1600, height: 1067, title: "Students seated for a teacher training session", alt: "Students seated on bolsters and mats in the practice room as a teacher addresses the group", description: "Students sit on bolsters and mats across the practice room while a teacher stands near the whiteboard at the back during a yoga teacher training session at The Castro Room." },
  demo: { file: "yoga-teacher-training-teaching-demonstration.jpg", width: 1600, height: 1067, title: "Teaching demonstration during yoga teacher training", alt: "Students gather around the studio floor to watch a teaching demonstration during yoga teacher training", description: "Students stand, sit and kneel around the studio floor to watch a teaching demonstration, with blocks and bolsters at hand, during yoga teacher training at The Castro Room." },
  graduationAisle: { file: "yoga-teacher-training-graduation-castro-room-san-francisco.jpg", width: 1280, height: 1600, title: "Yoga teacher training graduation ceremony", alt: "Yoga teacher training graduation: seated students in white applaud as a person walks a path of flower petals", description: "At the graduation ceremony for The Castro Room's yoga teacher training, students dressed in white sit in two rows and applaud as a person in white walks down an aisle strewn with flower petals." },
  graduationHug: { file: "yoga-teacher-training-graduation-embrace.jpg", width: 1600, height: 1067, title: "Embrace at the teacher training graduation", alt: "Two people in white embrace at the yoga teacher training graduation, with a sunflower in the foreground", description: "Two people dressed in white share a warm embrace at The Castro Room's yoga teacher training graduation while others look on smiling and one holds a sunflower." },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export const imagePath = (key: ImageKey) => `/images/${images[key].file}`;
export const imageUrl = (key: ImageKey) => `${SITE}${imagePath(key)}`;

export const teaserImages: ImageKey[] = ['demo', 'discussion', 'notes'];
export const ttGallery1: ImageKey[] = ['discussion', 'sidewalkLunch', 'lecture', 'notes', 'notebooks', 'chatting'];
export const ttGallery2: ImageKey[] = ['reading', 'circle', 'seated', 'demo', 'graduationAisle', 'graduationHug'];

// Which photos appear on which page (drives ImageObject JSON-LD and the image sitemap).
// Includes CSS background photos so they are discoverable too.
export const pageImages: Record<string, ImageKey[]> = {
  '/': ['hero', ...teaserImages, 'flow'],
  '/about': ['flow'],
  '/teacher-training': ['mats', 'triangle', 'manual', 'foldClass', ...ttGallery1, ...ttGallery2],
};
