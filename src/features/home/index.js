import React, { useEffect, useState } from 'react';
import { getPublishedPosts } from './api/getPublishedPosts';
import {
  ScaleIcon,
} from '@heroicons/react/24/outline'

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]

const Home = () => {
  const [publishedPosts, setPublishedPosts] = useState({})

  // Need to get the card component
  // And pass the published posts data to it
  // Then display it here

  useEffect(() => {
    (async () => {
      const postResult = await getPublishedPosts();
      setPublishedPosts(postResult);
    })();
  }, []);

  console.log(publishedPosts);

  return (
    <div className="mt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {cards.map((card) => (
            <div key={card.name} className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">{card.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                    View all
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;