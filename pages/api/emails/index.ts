import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({ auth: process.env.NOTION_CONTACTS_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  await notion.pages
    .create({
      parent: {
        database_id: `${process.env.NOTION_CONTACTS_DATABASE_ID}`
      },
      properties: {
        name: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: name
              }
            }
          ]
        },
        email: {
          type: 'email',
          email: email
        },
        message: {
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content: message
              }
            }
          ]
        },
        createdAt: {
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content: new Date().toLocaleString()
              }
            }
          ]
        }
      }
    })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(error => {
      res.status(500).json({ success: false });
    });
}
