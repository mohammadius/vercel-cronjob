import { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";
import YoutubeRssFeed from "../../functions/youtubeRssFeed";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await YoutubeRssFeed("https://www.youtube.com/feeds/videos.xml?channel_id=UC-lHJZR3Gqxm24_Vd_AJ5Yw", env.pewdiepieWebhookUrl);
	await YoutubeRssFeed("https://www.youtube.com/feeds/videos.xml?channel_id=UCBtvdchuXXrYoovpc5fPlSQ", env.bikinibodhiWebhookUrl);
	await YoutubeRssFeed("https://www.youtube.com/feeds/videos.xml?channel_id=UCXuqSBlHAE6Xw-yeJA0Tunw", env.linustechtipsWebhookUrl);

	res.status(204).end();
};
