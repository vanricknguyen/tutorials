import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";
import { Random } from "meteor/random";
import { Mongo } from "meteor/mongo";

const Receipts = new Mongo.Collection("receipts");

Meteor.startup(async () => {
	await Receipts.removeAsync({});

	const id = await Receipts.insertAsync({
		store: "Woolworths",
		total: 42.5,
		date: new Date()
	});

	console.log("Inserted ID:", id);

	const all = await Receipts.find().fetchAsync();

	console.log("All receipts:", all);

	await Receipts.updateAsync(id, { $set: { total: 99.99 } });
	const updated = await Receipts.findOneAsync(id);
	console.log("Updated receipt:", updated);

	await Receipts.removeAsync(id);
	const afterDelete = await Receipts.find().fetchAsync();
	console.log("After delete:", afterDelete);
});
