const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const accountRoute = require('./account.route');
const examRoute = require('./exam.route')
const subjectRoute = require('./subject.route');
const examHistoryRoute = require('./exam-history.route');

router.get('/', (req, res) => {
  res.send({
    success: true,
    description: 'Welcome to online-exam system',
    repository: 'https://github.com/quangdatpham/online-exam-system',
    author: {
      fullname: 'Quang Dat Pham',
      dob: '07/15/2000',
      nationality: 'Vietnamese',
      role: 'Full-stack Web Developer',
      description: `Curious - Ambitious - Adventurous
I'm a well self-study person. A responsible person, always actively learning, ambitious and eager for dedication.
I love sharing my knowledge. It is not property and therefore can not be owned by anyone.`,
      professionalSkills: [
        'Advanced JavaScript',
        'NodeJS',
        'ReactJS',
        'RubyOnRails',
        'Bash scripting'
      ],
      interests: [
        'traveling', 'programming'
      ],
      skills: {
        frontend: [
          'Bootstrap',
          'Redux',
          'Responsive Web Design',
          'DOM'
        ],
        backend: [
          'SpringMVC & Hibernate',
          'OOP',
          'Spree Commerce',
          'gRPC',
          'Microservices architecture'
        ],
        webDesign: [
          'UI-UX',
          'Sketch',
          'XD',
          'Zeplin',
          'InvisionApp'
        ],
        database:[
          'MySQL',
          'MongoDB'
        ],
        others: [
          'Version control GIT',
          'IoT - Arduino',
          'Google Cloud Platform',
          'MindMeister'
        ]
      },
      contact: {
        email: 'quangdat2000.pham@gmail.com',
        phone: '+84383545450',
        github: 'https://github.com/quangdatpham',
        linkedin: 'https://www.linkedin.com/in/quang-dat-pham-895235163/'
      }
    }
  });
});

router.use('/api/auth', authRoute);

router.use('/api/accounts', accountRoute);

router.use('/api/exams', examRoute);

router.use('/api/subjects', subjectRoute);

router.use('/api/exam-histories', examHistoryRoute);

module.exports = router;