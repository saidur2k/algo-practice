#Queue

Queues adhere to the "First-In First-Out" mantra. 

It's similar to people queueing in line.

All stacks need to have the methods enqueue (add/push) and dequeue (remove/pop). 

Like stacks, they'll have peek to see what the next element is to dequeue.

Queues are useful for lots of programming problems. 

For example, print jobs. 
Usually you want things to print in the order sent to the printer; 
otherwise Janice from Accounting is going to be printing all of her documents 
before you can print anything.

There are also priority queues as well. 
In a priority queue you also assign a priority to the elements that are enqueued. 
Items that have higher priorities get dequeued first. 

This is useful for networking; some packets are more important than others. 
If you're streaming video, that gets a high priority because getting a packet later 
means likely skipping some frames, whereas syncing to Dropbox can wait for a lull in 
network traffic to continue syncing.
