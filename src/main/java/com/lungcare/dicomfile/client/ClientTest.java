package com.lungcare.dicomfile.client;

import javax.ws.rs.client.ClientBuilder;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;

public class ClientTest {
	public static void main(String... strings) {
		Client client = (Client) ClientBuilder.newClient();
		//Client client = Client.create();
		WebResource resource = client
				.resource("http://localhost:8787/transfer/rest/remotefile/addSend");
		System.out.println(resource.get(String.class));
		
	}
}
