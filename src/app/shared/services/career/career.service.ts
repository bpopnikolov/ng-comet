import { Injectable } from '@angular/core';
import { Category } from '../../models/careers/category.model';
import { JobAd } from '../../models/careers/jobAd.model';

@Injectable()
export class CareerService {

  public categories: Category[] = [
    {
      id: '321rere',
      name: 'Marketing',
    },
    {
      id: '421f21',
      name: 'IT',
    },
    {
      id: '32rs1rfe223fe',
      name: 'Sales',
    },
    {
      id: '65ggfrs4sad3',
      name: 'Customer Service',
    },
  ];
  public jobs: JobAd[] = [
    {
      id: '507f1f77bcf86cd799439011',
      title: 'SEO Intern',
      desc: `Job Description:

  We are looking for internet and social media savvy person to do internet marketing and search engine optimization (SEO) related tasks.
  Our services include search engine marketing, social media marketing, reputation management, content writing, press release services and
  email marketing. By interning for us, you will learn a great deal about internet marketing,
  which is the key to making money online.`,
      category: 'Marketing',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '507f191e810c19729de860ea',
      title: 'Senior Javascript Developer',
      desc: `We are looking for a Javascript Developer to join the UI / Infrastructure team of six Java and JavaScript developers at
      EuPathDB, an established academic project of 30+ developers and biologists. EuPathDB specializes in high visibility web sites that
      integrate diverse large-scale biological datasets relevant to global infectious disease (see, e.g., PlasmoDB.org and ClinEpiDB.org).`,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-03-25T19:54:43.385Z',
    },
    {
      id: '613t8g554dcbcf86cd6587745',
      title: 'Junior Sales Manager',
      desc: `Your tasks
      Build relationships with clients to ensure renewals
      Support Sales in both identifying and retaining Client relationships.
      Develop account relationships and turn individual transactions into long-term cyclical accounts.
      Proactively develop client growth opportunities within a variety of business products categories.
      Report directly into the Director of Client Services `,
      category: 'Sales',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-15T19:54:43.385Z',
    },
    {
      id: '613t8g554dcbcf8ffgy345753',
      title: 'Customer Service Expert',
      desc: `This isn’t your typical customer service job: our agents provide top-quality phone support by answering incoming calls in a 
      team-based environment with no sales, no surveys, and no scripts. If you love helping people, crave variety in your work, and thrive
      on problem solving, then this is the place for you.`,
      category: 'Customer Service',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-23T09:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
    {
      id: '34ft679f78g554dcbc936558',
      title: 'System Administrator',
      desc: `Under general supervision, develop, modify, test, and install software to support IPTS user applications, and perform other
      related duties as required.
      Applies developed subject matter knowledge to solve common and complex business issues.
      Works on problems of diverse complexity and scope.
      Facilitates information validation. `,
      category: 'IT',
      status: 'Active',
      isDeleted: false,
      createdAt: '2018-04-30T19:54:43.385Z',
    },
  ];

  public getCategories(): Category[] {
    return this.categories;
  }

  public getCareers(): JobAd[] {
    return this.jobs;
  }

//   public getCareers(pageIndex: number, page: number): JobAd[] {
//     return this.jobs;
//   }
}
